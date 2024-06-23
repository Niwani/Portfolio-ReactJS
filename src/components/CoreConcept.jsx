import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcept() {
    return (
        <section id="core-concepts">
        <h2>Core Skills</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItems) => {<CoreConcepts {...conceptItems} />})}
          <CoreConcepts 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description} 
          image={CORE_CONCEPTS[0].image} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
    )
}