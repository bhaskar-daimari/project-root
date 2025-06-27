function Button() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-btn">
      ← Back
    </button>
  );
}
export default Button