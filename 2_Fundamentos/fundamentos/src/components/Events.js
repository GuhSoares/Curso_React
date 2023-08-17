const Events = () => {

    return (
        <div>
            <div>
                <button>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
        </div>
    );
};

export default Events;