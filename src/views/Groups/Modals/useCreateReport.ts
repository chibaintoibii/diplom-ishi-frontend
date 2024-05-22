import {useModal, useModalSlot} from "vue-final-modal";
import FinalModal from "@/components/Modals/FinalModal.vue";
import CreateReport from "@/views/Groups/Modals/CreateReport.vue";



export function useCreateReport() {
  const date = new Date()
  const modal = useModal({
    component: FinalModal,
    attrs: {
      title: `${date.toLocaleDateString()} uchun hisobot mazmuni`,
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
        component: CreateReport
      })
    }
  });

  return modal;
}