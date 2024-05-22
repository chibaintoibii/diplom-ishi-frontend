import {useModal, useModalSlot} from "vue-final-modal";
import FinalModal from "@/components/Modals/FinalModal.vue";
import RegisterTeacher from "@/views/Teachers/Modal/RegisterTeacher.vue";


export function useRegisterTeacher() {
  const modal = useModal({
    component: FinalModal,
    attrs: {
      title: 'Register teacher',
      onClose() {
        modal.close()
      }
    },
    slots: {
      default: useModalSlot({
        attrs: {
          onClose() {
            modal.close()
          }
        },
        component: RegisterTeacher
      })
    }
  })
  return modal;
}