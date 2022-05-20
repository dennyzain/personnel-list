export default function Typography({ name, phone, dob, email }) {
  return (
    <div>
      <h4 className="font-bold">Name</h4>
      <p>{`${name.first} ${name.last}`}</p>
      <h4 className="font-bold">Telephone</h4>
      <p>{phone}</p>
      <h4 className="font-bold">Birthday</h4>
      <p>{dob.date}</p>
      <h4 className="font-bold">Email</h4>
      <p>{email}</p>
    </div>
  );
}
