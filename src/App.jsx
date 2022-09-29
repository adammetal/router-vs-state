import React, { useState } from "react";

const LastSection = () => (
  <section>
    <h1>Fourth section</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad quos
      optio error libero numquam molestiae ut veritatis dolores odio? Nihil
      pariatur, reiciendis odit ad facilis vitae consectetur nobis, animi quod
      nisi quos voluptas cupiditate iste soluta. Omnis asperiores ex quas
      cupiditate, culpa, incidunt, reiciendis eos id beatae totam adipisci
      voluptatem quis eum! Fuga, omnis eligendi dolorum culpa a ullam nobis
      neque quod nisi est officia quas debitis, tempora voluptatem. Amet modi,
      dolores unde deserunt assumenda ratione soluta molestiae, cumque, vero
      sapiente voluptatum nemo cum adipisci porro? Sapiente maxime ullam
      accusantium dignissimos quasi aliquid? Sapiente, ab velit? Consectetur at
      hic alias corporis atque. Minus, deleniti earum? Doloremque debitis, velit
      incidunt laborum dolorum atque nulla unde. Omnis odit eius qui? Nihil,
      aliquid esse? Dicta expedita sequi omnis ea, iure dignissimos enim nam
      commodi rerum voluptas quo ipsum at distinctio iusto soluta impedit
      asperiores id cupiditate aliquid, quae animi ut tempora! Voluptatibus!
    </p>
  </section>
);

const SECTIONS = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
  FOURTH: "fourth",
};

function App() {
  const [active, setActive] = useState(null);

  const activate = (section) => {
    setActive(section);
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => activate(SECTIONS.FIRST)}>First</button>
        <button onClick={() => activate(SECTIONS.SECOND)}>Second</button>
        <button onClick={() => activate(SECTIONS.THIRD)}>Thrid</button>
        <button onClick={() => activate(SECTIONS.FOURTH)}>Fourth</button>
      </nav>
      <section
        className={`info news ${active === SECTIONS.FIRST ? "show" : "hidden"}`}
      >
        <h1>First section</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          tempora ipsum sint illum consectetur vitae aspernatur laborum facere
          tenetur officiis eaque, dolorem aperiam provident illo itaque suscipit
          nesciunt maxime qui autem delectus! Hic aut, commodi corporis quisquam
          laudantium quod adipisci molestiae doloremque saepe repudiandae autem
          velit quas, a veniam deleniti?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis eum
          quidem distinctio repellat sapiente quo tempore fugiat sequi fugit
          labore. Incidunt tempora et omnis dolores quisquam rem repellendus
          cupiditate facilis neque repudiandae quaerat cumque illo mollitia
          harum iste blanditiis dignissimos doloribus totam perferendis odio
          soluta quod, asperiores voluptas! Sunt et aut ratione consectetur
          magnam veniam ullam quia commodi quisquam ut velit obcaecati dolorem
          assumenda eum vitae magni, reprehenderit tempore sed distinctio.
          Adipisci aperiam laboriosam quae obcaecati accusamus dolore
          voluptatibus itaque assumenda blanditiis saepe enim, ipsam sequi velit
          sed, harum accusantium unde provident modi? Ratione totam ipsa nulla
          magni architecto error.
        </p>
      </section>
      <section
        className={`comments ${active === SECTIONS.SECOND ? "show" : "hidden"}`}
      >
        <h1>Second section</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          impedit, ducimus vitae voluptatem sapiente est? Nesciunt deleniti
          tempore odit, cupiditate distinctio quisquam soluta nobis modi quae
          fugiat alias beatae vel obcaecati repellat voluptatem, reprehenderit
          laudantium debitis suscipit praesentium dolores cum! Exercitationem
          quos facilis reiciendis voluptas repudiandae rem excepturi, pariatur
          perferendis delectus cumque similique? Rerum, dolor consequatur
          reiciendis laborum, corporis ad provident autem ratione expedita
          necessitatibus unde delectus nam tempora eveniet consequuntur
          inventore quidem optio alias ipsum architecto doloribus. Officia
          assumenda accusantium, commodi pariatur tenetur dolorem totam
          temporibus eligendi libero obcaecati, vel vero deleniti. Laboriosam
          quisquam veniam modi ut iste molestiae sapiente, distinctio magni,
          commodi reprehenderit consequuntur necessitatibus perferendis
          dignissimos eaque consectetur, eum velit ad. Quae doloribus a vero sit
          laborum libero corrupti laboriosam recusandae voluptas eaque suscipit
          labore fugit quia amet, quas magnam consequuntur vel aliquid. Suscipit
          nobis sint doloremque, vel, sunt eveniet optio in labore laboriosam
          beatae, assumenda rem.
        </p>
      </section>
      <section className={`${active === SECTIONS.THIRD ? "show" : "hidden"}`}>
        <h1>Third section</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maiores
          beatae natus quam debitis tempore esse nostrum dignissimos
          accusantium, impedit hic dolore est rem. Neque repellendus rem quidem
          soluta, ab officia fugiat animi sit distinctio ad cumque quaerat,
          cupiditate ipsam debitis mollitia reprehenderit libero. Assumenda
          rerum a, nam minima vitae in beatae eum delectus? Consectetur,
          recusandae voluptate aliquid odio a, ipsa perferendis deleniti sequi
          fugiat enim eaque accusantium nihil natus est assumenda suscipit
          eligendi ducimus iste. Ducimus doloremque officiis ad qui voluptate
          assumenda eveniet praesentium doloribus! Obcaecati cupiditate magni ea
          iste doloribus quod repudiandae saepe minus eos, nisi quasi amet.
        </p>
      </section>
      { active === SECTIONS.FOURTH && (
        <LastSection />
      ) }
    </div>
  );
}

export default App;
