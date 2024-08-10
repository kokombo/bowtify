import { CATEGORIES } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="paddingX my-16">
      <h4 className="text-xl md:text-2xl font-bold mb-5">Top Categories</h4>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
        {CATEGORIES.map((category, index) => {
          return (
            <Link key={index.toString()} href={category.href}>
              <figure>
                <div className="flex items-center justify-center h-64 md:h-80 bg-slate-50 mb-2">
                  <Image
                    src={category.illustration}
                    alt={category.label}
                    height={300}
                    width={300}
                    className="hover:scale-110 transition-all duration-400"
                  />
                </div>
                <figcaption className="font-bold lg:text-lg">
                  {category.label}
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
