import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingAPI } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingAPI,

    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeletingBooking };
}
