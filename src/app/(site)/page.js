import BrandIllustration from "@/components/BrandIllustration";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { getCategories, getTopProducts } from "@/lib/api";

export default async function Home() {
  const [categories, featured] = await Promise.all([
    getCategories(),
    getTopProducts(6),
  ]);

  const heroImage = featured.find((product) => product.main_image)?.main_image;

  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-6xl px-6 pt-2">
        <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-widest text-[#BE5B36]">
              Малые партии · обжарка и купажи вручную
            </div>
            <h1 className="max-w-[14ch] font-serif text-4xl leading-tight tracking-tight text-[#211C15] sm:text-5xl lg:text-6xl">
              Кофе и листовой чай малыми партиями.
            </h1>
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-[#5A5245]">
              Моносортовые зёрна и листовой чай, отобранные по сезону и
              доведённые до готовности в нашей обжарочной — для вашей кухни и
              для стойки вашего кафе.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#categories"
                className="inline-flex items-center justify-center rounded-full bg-[#211C15] px-7 py-3.5 text-sm font-semibold text-[#F5F0E6] transition-transform hover:-translate-y-0.5"
              >
                Смотреть каталог
              </a>
            </div>
          </div>
          <div className="relative min-h-70 overflow-hidden rounded-2xl bg-[#EFE7D6] lg:min-h-115">
            {heroImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={heroImage}
                alt=""
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <BrandIllustration variant="cup" className="absolute inset-0" />
            )}
          </div>
        </div>
      </section>

      <section id="categories" className="border-t border-[#211C15]/10">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <h2 className="mb-6 font-serif text-2xl text-[#211C15] sm:text-3xl">
            Категории
          </h2>
          {categories.length === 0 ? (
            <p className="text-[#5A5245]">
              Категорий пока нет — загляните позже.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section
        id="featured"
        className="mx-auto w-full max-w-6xl px-6 pb-12 sm:pb-16"
      >
        <h2 className="mb-6 font-serif text-2xl text-[#211C15] sm:text-3xl">
          Хиты сезона
        </h2>
        {featured.length === 0 ? (
          <p className="text-[#5A5245]">
            Пока нет хитов продаж — загляните позже.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-[#BE5B36] text-[#F5F0E6]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 px-6 py-12 sm:flex-row sm:items-center sm:py-14">
          <div>
            <h2 className="font-serif text-[26px] leading-tight sm:text-4xl">
              Для кафе и ресторанов
            </h2>
            <p className="mt-3.5 max-w-[48ch] text-[14.5px] leading-relaxed text-[#F5F0E6]/85">
              Оптовые цены, купажи под заказ и стабильные еженедельные поставки
              для заведений общепита.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-none rounded-full bg-[#F5F0E6] px-7 py-3.5 text-sm font-bold text-[#BE5B36] transition-transform hover:-translate-y-0.5"
          >
            Оптовые поставки
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <BrandIllustration
            variant="roastery"
            className="min-h-55 rounded-2xl bg-[#EFE7D6] lg:min-h-85"
          />
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#BE5B36]">
              Наша история
            </div>
            <h2 className="max-w-[18ch] font-serif text-[28px] leading-tight text-[#211C15] sm:text-4xl">
              Небольшая обжарочная с давней памятью о хорошем вкусе.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-[#5A5245]">
              Мы обжариваем кофе и купажируем чай небольшими партиями, чтобы
              ничего не залёживалось на полке. Каждая партия проходит дегустацию
              перед отправкой — независимо от того, едет она на домашнюю кухню
              или в оживлённое кафе.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
