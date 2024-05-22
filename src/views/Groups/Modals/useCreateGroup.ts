import {useModal, useModalSlot} from "vue-final-modal";
import FinalModal from "@/components/Modals/FinalModal.vue";
import CreateGroup from "@/views/Groups/Modals/CreateGroup.vue";

export function useCreateGroup() {
  const modal = useModal({
    component: FinalModal,
    attrs: {
      title: 'Create Group',
      onClose() {
        modal.close()
      }
    },
    slots: {
      default: useModalSlot({
        component: CreateGroup,
        attrs: {
          onClose() {
            modal.close()
          }
        }
      })
    }
  })
  return modal
}