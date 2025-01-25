import ProductGrid from '@/components/universal/productgrid'
import ProdCard from '@/components/universal/productgrid'
import Breadcrumbs from '@/components/universal/breadcrumbs'
import { IProductProp } from '@/interfaces'
import { GetProductData } from '@/sanity/sanity.query'
import Image from 'next/image'
import Link from 'next/link'

const SingleProd = async ({params} : {params : {id :string}}) => {  
  const prodData = await GetProductData();
    
  const product = prodData.find((item: IProductProp) =>
     item.slug.current === params.id);  // Use .trim() to ensure no extra spaces
  return (
    <div className='bg-[#FAFAFA]'>
      <Breadcrumbs/>
      <div className='wrapper'>
      { product && 
      <div className='flex flex-col lg:flex-row gap-[30px]'>
        <div className='flex flex-col gap-5'>
          <Image className='md:w-[506px] w-fit h-[450px]' src={product.imageUrl || 'ProdCard-8.png'} alt="Furniture" width={506} height={450}></Image>
          <div className='flex gap-5'>
            <Image className='w-fit md:w-100 h-[75px]' src={product.imageUrl || 'ProdCard-8.png'} alt="Furniture" width={100} height={75}></Image>
            <Image className='w-fit md:w-100 h-[75px]' src={product.imageUrl || 'ProdCard-8.png'} alt="Furniture" width={100} height={75}></Image>
          </div>
        </div>
        <div className='flex flex-col text-left gap-2 p-3 max-w-[710px]'>
          <div className='font-normal text-xl tracking-[0.2px]'>{product.title}</div>
          <div className='flex gap-2'>
          <div className='text-sm font-bold'><span>star start star</span> 10 Reviews</div>
          </div>
          <div className='text-[#252B42] font-bold text-2xl flex gap-3 my-4'>
          <div className='opacity-50'><del>${product.price}</del></div>
          <div>${product.price}</div>
          </div>
          <div className='flex gap-2'>
            <span className='text-[#737373]'>Availiblity :</span>
            <span className='text-[#23A6F0]'>In Stock</span>
          </div>
          <div className='mt-5 text-sm font-normal text-wrap text-[#858585]'>{product.description}</div>
          <hr className='w-full bg-[#BDBDBD] my-5' />
          <div className='flex gap-[10px]'>
            <span className='rounded-full w-[30px] h-[30px] bg-[#23A6F0]'></span>
            <span className='rounded-full w-[30px] h-[30px] bg-[#2DC071]'></span>
            <span className='rounded-full w-[30px] h-[30px] bg-[#E77C40]'></span>
            <span className='rounded-full w-[30px] h-[30px] bg-[#252B42]'></span>
          </div>
          <div className='flex gap-[10px] mt-10'>
            <button className='bg-[#23A6F0] text-white py-[10px] px-[20px] rounded-[5px]'>Select Option</button>
            <button  aria-label="Add to Favorite" className='w-10 h-10 flex items-center justify-center p-1 rounded-full bg-[#FFFFFF] border border-[#E8E8E8]'><Image  src={"/images/Icon-Favorite.png"} alt='Favorite' width={20} height={20}></Image></button>
            <button  aria-label="Add to Cart" className='w-10 h-10 flex items-center justify-center p-1 rounded-full bg-[#FFFFFF] border border-[#E8E8E8]'><Image src={"/images/Icon-Cart.png"} alt='Cart' width={20} height={20}></Image></button>
            <button  aria-label="View Details"  className='w-10 h-10 flex items-center justify-center p-1 rounded-full bg-[#FFFFFF] border border-[#E8E8E8]'><Image src={"/images/Icon-view.png"} alt='Favorite' width={20} height={20}></Image></button>
          </div>

        </div>
      </div>
}
    </div>
    {!product && <div className='h-24 w-full text-center flex items-center justify-center font-bold text-3xl'>Product Not Found Back to the <button className='rounded-md bg-black m-2'><Link className='px-4 py-6 text-white' href={"/"}>Home Page</Link></button></div>}

    <ProductGrid/>
    
    </div>
  )
}

export default SingleProd
