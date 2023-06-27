import Bruscheta from '../../assets/bruscheta.png';
export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={Bruscheta}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>
    </header>
  );
}