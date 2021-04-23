import { useState } from "react"

export default function Home(){
    const [books, setBooks] = useState([{
        id: 1,
        nome: "nome livro",
        descrição: "livro de...",
        capa: "link"
    },
    {
        id: 2,
        nome: "nome livro",
        descrição: "livro de...",
        capa: "link"
    }
])

    return (
        <section className="container">
            <div className="row">
                <div className="col-md-3">
                <div class="card" style="width: 18rem;">
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
            </div>
        </section>
    )
}