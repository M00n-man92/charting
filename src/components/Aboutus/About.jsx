import React, {useState} from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import Sub from '../subscribe/Sub';
import './about.scss';
export default function About({open,setOpen}) {
    const [openMenu, setOpenMenu] = useState(false)

    return (
      <>
      <Navigation open={openMenu} setOpen={setOpenMenu}/>
      <Sub open={openMenu} setOpen={setOpenMenu} />
    <div className={"about "+ (open && "active")}>
        <div className="header">
            <h1>ABOUT US</h1>
        </div>
        <div className="content">
            <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus vitae magna convallis dapibus. Integer tempor sagittis blandit. Nullam ut tortor quam. Donec nec imperdiet velit. Cras elementum fringilla dolor, sit amet fringilla dui lobortis in. Vestibulum dapibus et libero eu euismod. Maecenas sagittis, ligula non tempor euismod, enim ligula porta libero, tincidunt luctus mi orci vitae mi. Nam in erat in metus semper bibendum. Ut vehicula eros in purus ultrices, ut ultrices orci interdum. Proin sollicitudin suscipit commodo. Maecenas molestie auctor venenatis. Mauris sed dolor justo. Pellentesque nisi eros, convallis vitae lacinia vitae, elementum id justo. Curabitur in mi at metus aliquet hendrerit. Proin cursus a augue vitae aliquet.</p>

            </div>
            <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus vitae magna convallis dapibus. Integer tempor sagittis blandit. Nullam ut tortor quam. Donec nec imperdiet velit. Cras elementum fringilla dolor, sit amet fringilla dui lobortis in. Vestibulum dapibus et libero eu euismod. Maecenas sagittis, ligula non tempor euismod, enim ligula porta libero, tincidunt luctus mi orci vitae mi. Nam in erat in metus semper bibendum. Ut vehicula eros in purus ultrices, ut ultrices orci interdum. Proin sollicitudin suscipit commodo. Maecenas molestie auctor venenatis. Mauris sed dolor justo. Pellentesque nisi eros, convallis vitae lacinia vitae, elementum id justo. Curabitur in mi at metus aliquet hendrerit. Proin cursus a augue vitae aliquet.</p>

            </div>
            <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus vitae magna convallis dapibus. Integer tempor sagittis blandit. Nullam ut tortor quam. Donec nec imperdiet velit. Cras elementum fringilla dolor, sit amet fringilla dui lobortis in. Vestibulum dapibus et libero eu euismod. Maecenas sagittis, ligula non tempor euismod, enim ligula porta libero, tincidunt luctus mi orci vitae mi. Nam in erat in metus semper bibendum. Ut vehicula eros in purus ultrices, ut ultrices orci interdum. Proin sollicitudin suscipit commodo. Maecenas molestie auctor venenatis. Mauris sed dolor justo. Pellentesque nisi eros, convallis vitae lacinia vitae, elementum id justo. Curabitur in mi at metus aliquet hendrerit. Proin cursus a augue vitae aliquet.</p>

            </div>
        </div>
    </div>
    <Footer open={openMenu} setOpen={setOpenMenu}/>
    </>
  )
}
