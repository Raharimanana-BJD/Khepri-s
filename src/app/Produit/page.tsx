import { CTA, CardProduit, Typography } from "@/components";
import { dataProduit } from "@/lib/constant";

export default function ProduitPage() {
  return (
    <main className="min-h-[100dvh]">
      <section className="container pt-[20vh] h-screen flex flex-col justify-center items-center">
          <Typography variant="small" className="text-grey-500 uppercase mb-2">Produit</Typography>
          <Typography variant="h1" className="text-secondary-500 dark:text-grey-100 text-center">
            Les differents type de nos<br/> produits
          </Typography>
          <Typography variant="p" className="text-secondary-100 text-center dark:text-grey-100">
            Une equipe pour SMIC. Competences techniques, design,<br/> capacite a se mettre a la place du commercant
          </Typography>
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full py-8">
            {
                dataProduit.map((card, index) => {
                  return (
                    <CardProduit className="border border-secondary-500 dark:border-grey-100"
                      key={index}
                    >
                      <div className="p-4 rounded-full h-16 w-16 mx-auto bg-secondary-500 dark:bg-primary dark:text-secondary-500 text-primary text-center flex items-center justify-center">
                        {card.icon}
                      </div>
                      <Typography variant="h3" className="font-bold mt-2 text-secondary-500 text-center dark:text-grey-100">{card.title}</Typography>
                    </CardProduit>
                  );
                })
              }
              <CTA url="/Produit" className="bg-primary dark:bg-secondary-500 flex md:hidden dark:text-primary text-secondary-500 w-full md:w-fit min-w-[224px]">
                <Typography variant="small" className="uppercase text-[12px] font-bold">Voir plus</Typography>
              </CTA>
          </div>
      </section>
    </main>
  );
}
