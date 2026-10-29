import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useIdioma } from '../../../lib/idioma'

export default function ButtonCall() {
  const { lang } = useIdioma()
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
                        className="button-call">{lang === 'en' ? 'CALL' : 'LLAMAR'} +34 662 47 0645</a>
                </div>

                <style jsx>{`
        .container-button {
          display: flex;
          justify-content: center;
        }
        .container-button .button-call {
              align-items: center;
              background-color: #a8cfe3;
              border: 0;
              border-radius: 100px;
              box-sizing: border-box;
              color: #1f2d36;
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

            .container-button .button-call:hover,
            .container-button .button-call:focus { 
              background-color: #93c2db;
              color: #1f2d36;
            }

            .container-button .button-call:active {
              background: #7fb5d2;
              color: #1f2d36;
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
