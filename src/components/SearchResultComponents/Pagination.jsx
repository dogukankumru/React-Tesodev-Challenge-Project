function Pagination({postsPerPage,totalPosts,currentPage,setCurrentPage}) {

  //Sayfalar listesi
  const pageNumbers = [];
  
  //Toplamda kaç adet sayfa olacağını hesaplıyoruz.
  for(let i=1; i<=Math.ceil(totalPosts / postsPerPage);i++){
      pageNumbers.push(i);
  }

  //Eğer kullanıcı ilk aramayı yapıp yüksek seviyede bir sayfa sayısına ulaşırsa, daha sonra ikinci arama yapıldığı zaman otomatik birinci sayfaya dönüyoruz
  if(currentPage>pageNumbers.length){
      setCurrentPage(1)
  }

  // Sayfa sayısına tıklandığında o sayfadaki içerikler gösterilecek
  const paginate = (pageNumber)=>setCurrentPage(pageNumber);

  // Bulunan sayfadan bir önceki sayfaya dönmek için
  const prevPage =()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }

  //Bulunan sayfadan bir sonraki sayfaya dönmek için
  const nextPage =()=>{
      if(currentPage<pageNumbers.length){
          setCurrentPage(currentPage+1)
      }
  }

  return (
    <ul className="pagination">
        
        {/*Eğer birden fazla sayfa varsa Prev ve Next butonları da gözükecek */}
        {pageNumbers.length>1 ? <button href="#" className="page-next-prev" onClick={()=>prevPage()}>Previous</button> : null} 

        {/*Yukarıda oluşturduğumuz sayfalar listesini sayfamızda gözükmesini sağlıyoruz */}
        {pageNumbers.map((number,index)=>(
                <li key={index} className="page-item">
                    <button className={currentPage===number ? "page-link active" : "page-link" }  onClick={()=>paginate(number)}>{number}</button>
                </li>
        ))}

        {pageNumbers.length>1 ? <button href="#" className="page-next-prev" onClick={()=>nextPage()}>Next</button> : null}

        
    </ul>
  )
}

export default Pagination