// import { useState } from "react";

// export default function FeedbackForm({ selectedDate }) {
//   // Destructure selectedDate from props
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     message: "",
//     submitted: false,
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setState({ ...state, submitted: true });
//   };

//   if (state.submitted) {
//     return <p className="text-black">Thanks for your feedback!</p>;
//   }

//   return (
//     <div className="w-full h-full flex place-content-center">
//       <form
//         className="flex flex-col gap-1 w-full h-2/3 border-2 rounded-xl border-black p-4"
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="name" className="text-dark-green">
//           Name
//         </label>
//         <input
//           placeholder="Enter your name"
//           id="name"
//           type="text"
//           name="name"
//           className="text-black bg-white-green p-2"
//           value={state.name}
//           onChange={(event) => setState({ ...state, name: event.target.value })}
//         />
//         <label htmlFor="email" className="text-dark-green">
//           Email
//         </label>
//         <input
//           placeholder="Enter your email"
//           id="email"
//           type="text"
//           name="email"
//           className="text-black bg-white-green p-2"
//           value={state.email}
//           onChange={(event) =>
//             setState({ ...state, email: event.target.value })
//           }
//         />
//         <label htmlFor="date" className="text-dark-green">
//           Date: {selectedDate} {/* Display selectedDate */}
//         </label>
//         <label htmlFor="message" className="text-dark-green">
//           Message
//         </label>
//         <textarea
//           className="bg-white-green p-2 text-black"
//           id="message"
//           name="message"
//           value={state.message}
//           onChange={(event) =>
//             setState({ ...state, message: event.target.value })
//           }
//         />
//         <button
//           className="btn btn-primary bg-sec-red text-white-green"
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function FeedbackForm({ selectedDate }) {
  const [state, handleSubmit] = useForm("mgegpoaz");
  if (state.succeeded) {
    setTimeout(() => {
     window.location.href = "https://forms.gle/QpTEmSbREuPefp9N7";
    }, 2500);
    return <h2>Thanks for joining! Please Fill the form for payment and confirmation of your slot booking <br /><strong>You will be redirect to fill the form please wait</strong></h2>;
  }
  return (
    <div className="w-full h-full flex place-content-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-1 w-full h-2/3 border-2 rounded-xl border-black p-4"
      >
        <label htmlFor="email" className="text-dark-green">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="text-black bg-white-green p-2"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="text-dark-green">
          Schedule:
        </label>
        <textarea id="message" name="message" value={selectedDate} readOnly />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-primary bg-sec-red text-white-green"
        >
          Submit
        </button>
      </form>
    </div>
  );
}