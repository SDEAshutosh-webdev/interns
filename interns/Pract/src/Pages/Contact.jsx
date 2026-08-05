function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Enter your message"></textarea>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;