import { FaWhatsapp } from "react-icons/fa";

const BackToTopModule = () => {
    const phoneNumber = "51960196221";
    const defaultMessage = "Hola, me gustaría obtener más información";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <>
            <div className="mil-back-to-top">
                <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: '#25D366',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        position: 'fixed',
                        transform: 'scaleY(-1)',
                        zIndex: 1000,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}
                >
                    <FaWhatsapp color="white" size={40} />
                </a>
            </div>
        </>
    );
};

export default BackToTopModule;