import Card from "../../components/Ui/Card/Card"

const cards = [
  {
    counts: 120,
    title: "Projects",
    icon: "fa-regular fa-building"
  },
  {
    counts: 520,
    title: "Users",
    icon: "fa-solid fa-users"
  },
  {
    counts: 20,
    title: "Developers",
    icon: "fa-solid fa-building-user"
  },
  {
    counts: 10,
    title: "Blogs",
    icon: "fa-solid fa-blog"
  }
]

export default function Status() {
  return (
    <section className="w-100 mt-5">
      <div className="container-fluid">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-12 col-md-3 gap-3" key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
