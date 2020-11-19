const Partners = () => {

    const partners = [
        'apple',
        'airbnb',
        'google',
        'nvidia',
        'tesla',
        'samsung',
        'facebook',
        'microsoft'
    ]

    return (
        <div className="partners">
            <div className="title">
                <h2>We've worked with</h2>
            </div>
            <div className="companies">
                {
                    partners.map(partner => {
                        return <img src={`../../assets/images/${partner}.PNG`} alt={partner}/>
                    })
                }
            </div>
        </div>
    )
}

export default Partners