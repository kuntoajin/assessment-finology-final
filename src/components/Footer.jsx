const Footer = () => {
    return (
        <div className="footer">
            <img 
                src="../../assets/images/footer-rounded-001.svg"
                style={{
                    position: 'absolute',
                    top: -66,
                    left: 80,
                }}
            />
            <img 
                src="../../assets/images/footer-rounded-002.svg"
                style={{
                    position: 'absolute',
                    top: -66,
                    right: 0,
                }}
            />
            <div className="footer__content">
                <div className="logo">
                    <img src="../../assets/images/logo.png" alt=""/>
                    <h2>Easy Work</h2>
                </div>
                <div className="address">
                    <strong>Address</strong>
                    <p style={{ margin: 0 }}>52-1, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>
                </div>
                <div className="contact">
                    <div className="phone">
                        <strong>Contact</strong>
                        <p style={{ margin: 0 }}>03-7451 5283</p>
                    </div>
                    <div className="fax">
                        <strong>Fax</strong>
                        <p style={{ margin: 0 }}>03-7451 5283</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer