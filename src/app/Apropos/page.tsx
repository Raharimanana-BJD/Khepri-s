import { Typography } from "@/components"

function AproposPage() {
  return (
    <div className="min-h-[100dvh]">
            <section className="container pt-[20vh] h-screen flex flex-col justify-center items-center">
          <Typography variant="small" className="text-grey-500 uppercase mb-2">A Propos</Typography>
          <Typography variant="h1" className="text-secondary-500 dark:text-grey-100 text-center">
            A propos de<br/> nous
          </Typography>
          <Typography variant="p" className="text-secondary-100 text-center dark:text-grey-100">
            Une equipe pour SMIC. Competences techniques, design,<br/> capacite a se mettre a la place du commercant
          </Typography>
      </section>
    </div>
  )
}

export default AproposPage