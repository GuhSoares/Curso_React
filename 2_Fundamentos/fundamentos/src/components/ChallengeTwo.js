const ChallengeTwo = () => {

    const a = 10;
    const b = 20;

    const sum = a + b;

  return (
    <div>
        <h1>Challenge Two</h1>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(a * b)}>
            Clique aqui para Multiplicar</button>
            <p>Resultado no console</p>
    </div>
  );
}

export default ChallengeTwo