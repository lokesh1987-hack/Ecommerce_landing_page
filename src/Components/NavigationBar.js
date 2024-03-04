import React from 'react'

export const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg px-4">
            <div className="container-fluid">
                <a className="navbar-brand w-25" href="https://www.linkedin.com/company/littardo/about/">
                    <img src="https://media.licdn.com/dms/image/D560BAQE1cL0LNxyQkQ/company-logo_200_200/0/1707308262159/littardo_logo?e=1717632000&v=beta&t=_SC3o7SwOnFGH0kbJMH04SNXjTcGdq1Ndd4LCAHDnbQ" alt="Logo" width="90" height="70" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex w-100" role="search">
                        <div className="input-group">
                            <input type="text" className="w-100 me-2 rounded-3 border border-opacity-25 form-control" placeholder="Search for a product and item.." />
                            <i className="icon fas fa-search"></i>
                        </div>
                        <button className="btn btn-outline-success mx-3 login_button" type="submit">Login</button>
                        <button className="d-flex btn bg-light border border-success p-2 border-opacity-10" type="submit"><img className='m-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/512px-Font_Awesome_5_solid_shopping-cart.svg.png' alt='cart' style={{ height: "15px" }} />Cart</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
