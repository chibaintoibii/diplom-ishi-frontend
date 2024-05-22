import {useModal, useModalSlot} from "vue-final-modal";
import RegisterStudent from "@/views/Students/Modal/RegisterStudent.vue";
import FinalModal from "@/components/Modals/FinalModal.vue";
import {i18n} from "@/services/locale";

export function useRegisterStudent() {
  const modal = useModal({
    component: FinalModal,
    attrs: {
      title: i18n.global.t('students.register'),
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
        component: RegisterStudent
      })
    }
  })
  return modal;
}