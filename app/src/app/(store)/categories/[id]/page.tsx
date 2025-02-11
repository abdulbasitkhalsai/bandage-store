import ProductGrid from "@/components/universal/productgrid";
import Breadcrumbs from "@/components/universal/breadcrumbs";
import { ICategoryProp, IProductProp } from "@/interfaces";
import { GetCategoriesData, GetCategoryProductsData } from "@/sanity/sanity.query";
import ProdCard from "@/components/universal/prodcard";

const SingleCategory = async ({params} : {params : {id :string}}) => {  
      const categData = await GetCategoriesData();
  const category : ICategoryProp = categData.find((item: ICategoryProp) =>
     item.slug.current === params.id
); 
const products = category?._id? await GetCategoryProductsData(category?._id): [];
  return (
    <div className='bg-[#FAFAFA]'>
    <Breadcrumbs/>
    <div className=" w-full"> 
        
    <ul className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[#8B8B8B] font-medium text-[18px] leading-[32px] h-auto w-full justify-center text-center items-center">
    {products && products.length > 0 ? (products.map((product: IProductProp) => (<ProdCard key={product._id} product={product} />))
        ) : (
            <p className="text-black text-center w-full block font-bold mx-auto">No products available in this category.</p>
        )}
    </ul>
        </div>

  <ProductGrid/>
  
  </div>

    )
}

export default SingleCategory