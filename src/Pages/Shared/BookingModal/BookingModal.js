import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ bookings, setBookings, refetch }) => {
    const { originalPrice, resalePrice, title, image } = bookings;
    // console.log("bookings",bookings)
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;
        const booking = {
            name,
            originalPrice : originalPrice,
            resalePrice : resalePrice,
            title : title,
            image : image,
            meetingLocation,
            email,
            phone
        }

        console.log(booking);
        fetch('https://used-cloth-collections-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookings(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2"onClick={() => {setBookings(null)}}>✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking}>
                        <input name='name' type="text" value={user?.displayName} className="input input-bordered w-full min-w-xs my-3" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full min-w-xs my-3" />
                        <input name='email' type="email" value={user?.email} className="input input-bordered w-full min-w-xs my-3" disabled />
                        <input name='originalPrice' type="text" value={originalPrice} className="input input-bordered w-full min-w-xs my-3" disabled />
                        <input name='resalePrice' type="text" value={resalePrice} className="input input-bordered w-full min-w-xs my-3" disabled />
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input input-bordered w-full min-w-xs my-3"  />
                        <input type="submit" className="input input-bordered w-full min-w-xs my-3 btn bg-slate-900 border-none text-white" value='SUBMIT' />
                    </form>
                </div>

            </div>
        </>
    );
};

export default BookingModal;
