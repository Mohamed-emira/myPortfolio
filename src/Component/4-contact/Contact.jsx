import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../animation/done";
import contact from "../../animation/contact";

export default function Contact() {
  const [state, handleSubmit] = useForm("xrgwnaya");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I<br />
        puplish something new
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex ">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Adress:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div style={{ marginTop: "2rem" }} className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              style={{ marginLeft: ".5rem" }}
              name="message"
              id="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting..." : "submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={done}
              />
              Your message has been sent successfully
            </p>
          )}
        </form>
        <div className="animation ">
          <Lottie style={{ height: 355 }} animationData={contact} />{" "}
        </div>
      </div>
    </section>
  );
}
