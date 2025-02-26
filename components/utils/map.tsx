export default function Map() {
    return (
        <div className="w-full h-72">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3914.406870319146!2d105.05952067504731!3d11.15748078901535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA5JzI2LjkiTiAxMDXCsDAzJzQzLjUiRQ!5e0!3m2!1sen!2skh!4v1740553835803!5m2!1sen!2skh" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                className="w-full h-full"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}