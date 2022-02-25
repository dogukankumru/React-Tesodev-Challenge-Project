import footerImage from "../../images/FooterImage.png"


function Footer() {
  return (
    <footer className="clearfix">
        <img src={footerImage} alt="footerImage" />
        <div className="contact">
            <p>İletişim</p>
            <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul</p>
            <p className="footer-paragraph">Email: bilgi@tesodev.com</p>
        </div>
        
        {/* Google haritalardan Tesodev konumunu alıyor*/}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1645520322977!5m2!1str!2str" title="Google-map-Tesodev" width="467.49" height="222.49" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
    </footer>
  )
}

export default Footer