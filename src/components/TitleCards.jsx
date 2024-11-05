const items = [
  {
    title: 'Sunset over the mountains',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CK8I2_KT3yS-wt2utgCI1QHaEK%26pid%3DApi&f=1&ipt=1b3bb2658c6651222c6ab2fd55a6f5ec48824cc35e5ed47c7b8962257d19ff57&ipo=images',
  },
  {
    title: 'City skyline at night',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hQEqclSRWQPH2mV9h0hmEwHaEK%26pid%3DApi&f=1&ipt=02354ecb330ec0a4a03ade22c92f20d789b8c8d048105bf72ae91ff05c4c6c16&ipo=images',
  },
  {
    title: 'Forest in the morning',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.erwOcCP12yJN1BIx3qyrzAHaE8%26pid%3DApi&f=1&ipt=c4c516fb27e5f47f10b29fe0faf31e1dc78be732331038af6bc2a6424456e99d&ipo=images',
  },
  {
    title: 'Frozen',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.L5zRwaJrMin3OUbvezqGvgAAAA%26pid%3DApi&f=1&ipt=809180adf03a707c32ab35d387cf335dd54d986ba4da44a71ce549e82dcd5a12&ipo=images',
  },
];

const TitleCards = ({title}) => {
  return (
    <div className="p-8 ">
      <h2 className='text-white font-bold text-3xl text-start'>{title?title:"Popular on netflix"}</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-x-hidden'>
        {items.map((item, index) => (
          <div key={index} className=' rounded-lg shadow-md overflow-hidden'>
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h3 className='font-semibold text-sm'>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
