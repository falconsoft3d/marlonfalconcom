import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ButtonCall() {
  return (
            <>
            {/* 
            <div style={{ margin: 20 }}  >
              
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h1>Agente Digitalizador Español</h1>
            </div>   */}
              {/* <Link href="https://wa.me/34662470645" 
                    target="_blank"
                    >
                <a href='/kit-digital'>    
                  <div className='mt-2'>
                      <Image
                      src="/images/kit-digital-odoo.png"
                      alt="kit-digital-odoo"
                      width={918}
                      height={106}
                      priority
                      className="next-image kit-digital-odoo"
                      />
                  </div>
                </a>  
              </Link>
            </div>  */}

            

                <div className="container-button">
                    <a href="callto:+34662470645" target="_blank" rel="noopener noreferrer" 
                        className="button-call">LLAMAR +34 662 47 0645</a>
                </div>

                <style jsx>{`
        .container-button {
          display: flex;
          justify-content: center;
        }
        .button-call {
              align-items: center;
              background-color: #0A66C2;
              border: 0;
              border-radius: 100px;
              box-sizing: border-box;
              color: #ffffff;
              cursor: pointer;
              display: inline-flex;
              font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
              font-size: 16px;
              font-weight: 600;
              justify-content: center;
              line-height: 20px;
              max-width: 480px;
              min-height: 40px;
              min-width: 0px;
              overflow: hidden;
              padding: 0px;
              padding-left: 20px;
              padding-right: 20px;
              text-align: center;
              touch-action: manipulation;
              transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
              user-select: none;
              -webkit-user-select: none;
              vertical-align: middle;
              style: none;
              text-decoration: none;
            }

            .button-call:hover,
            .button-call:focus { 
              background-color: #16437E;
              color: #ffffff;
            }

            .button-call:active {
              background: #09223b;
              color: rgb(255, 255, 255, .7);
            }

            .button-18:disabled { 
              cursor: not-allowed;
              background: rgba(0, 0, 0, .08);
              color: rgba(0, 0, 0, .3);
            }

      `}</style>
    </>
  );
}
