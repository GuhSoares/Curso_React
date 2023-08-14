const TemplateExpressions = () => {

    const name = "Gustavo"
    const data = {
        age: 20,
        job: "Developer"
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>Atualmente você tem {data.age} anos</p>
        </div>
    )

}

export default TemplateExpressions;