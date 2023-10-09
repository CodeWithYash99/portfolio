import './index.css'

const copyright = String.fromCodePoint(0x00A9);

const Footer = () => {
  return (
    <div class="footer-bg-container">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-row justify-content-center align-items-center pt-2">
                    <p class="footer-rights"> {copyright} 2023 by Yashwanth. Created with React Js.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer