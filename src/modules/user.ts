import {computed, type ComputedRef, inject, provide, ref, type Ref, watch} from "vue";
import {getMe, IGetMeResponse, IUserRole} from "@/services/http/api/user";
import Auth from "@/modules/auth";
import {watchImmediate} from "@vueuse/core";

const UserModuleSymbol = Symbol('userModule')

export interface IUserModule {
  token: Ref<string | null>
  setToken: (token: string) => void
  isLoaded: Ref<boolean>
  user: Ref<IGetMeResponse>
  hasRole: (role: IUserRole) => ComputedRef<boolean>
  isLoggedUser: (id: string) => boolean
  isAdmin: ComputedRef<boolean>
  isStudent: ComputedRef<boolean>
  isTeacher: ComputedRef<boolean>
  id: ComputedRef<string>
}

export function createUserModule() {
  const token = ref<string | null>(Auth.getToken())
  const isLoaded = ref(false)
  const user = ref<IGetMeResponse>({
    _id: '',
    role: '' as IUserRole,
    username: '',
    fullName: ''
  })

  function hasRole(role: IUserRole): ComputedRef<boolean> {
    return computed(() => {
      return user.value.role === role
    })
  }

  function isLoggedUser(id: string): boolean {
    return user.value._id === id;
  }

  function setToken(newToken: string) {
    token.value = newToken
    Auth.saveLogin(newToken)
  }

  const isAdmin = hasRole(IUserRole.Admin);
  const isTeacher = hasRole(IUserRole.Teacher);
  const isStudent = hasRole(IUserRole.Student)

  const id = computed(() => user.value._id);

  const userModule: IUserModule = {
    token,
    setToken,
    id,
    hasRole,
    user,
    isAdmin,
    isStudent,
    isTeacher,
    isLoggedUser,
    isLoaded,
  }

  const {data: userDetails, refetch: refetchUser} = getMe();

  watch(userDetails, (newUser) => {
    if (newUser) {
      user.value = newUser
      isLoaded.value = true
    }
  })

  watchImmediate(token, (token) => {
    if (token) refetchUser()
  })

  return userModule;
}

export function provideUserModule() {
  const module = createUserModule()

  provide<IUserModule>(UserModuleSymbol, module)

  return module
}

export function useUser() {
  return inject(UserModuleSymbol) as IUserModule
}