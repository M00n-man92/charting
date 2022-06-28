import React, { useState } from 'react'
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import "./chart.scss"

// import WhatsApp from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkIcon from '@mui/icons-material/Link';
import WhatsApp from '@mui/icons-material/WhatsApp';

import { ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from '@mui/icons-material'

export default function Chart({ open, setOpen }) {
  const [on, setOn] = useState(true);
  const [social, setSocial] = useState(true);
  const [tableSocilas, setTableSocials] = useState(true);
  const [sec, setSec] = useState(null);
  const first = {
    "Weekly": 535891,
    "May_21": 2688256,
    "May_17": 2152365,
    "meta_may_17": "Kal Kin - Eshi Kezias | እሺ ከዚያስ - New Ethiopian Music 2022 (Official Video) by Hope Music Ethiopia 10 days ago 4 minutes, 58 seconds 2,152,365 views",
    "meta_may_21": "Kal Kin - Eshi Kezias | እሺ ከዚያስ - New Ethiopian Music 2022 (Official Video) by Hope Music Ethiopia 13 days ago 4 minutes, 58 seconds 2,688,256 views",
    "link": "https://www.youtube.com/embed/Sbjl4OmYKwE",
    "Artist": "Kal Kin",
    "Song": " Eshi Kezias | እሺ ከዚያስ "
  }
  const jsonfile = require("./lastlastone.json")

  const [itemm, setitemm] = useState(0);
  const nion = (digits) => {
    if (digits === "l") {
      itemm !== 0 ? setitemm(itemm - 1) : setitemm(4);
      // console.log(itemm)
    } else if (digits === "r") {
      itemm !== 4 ? setitemm(itemm + 1) : setitemm(0);
    }
  }
  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  return (
    <div className={'chart ' + (open && "active")} >
      <div className="container">
        <div className="title">
          <h1>TOP 20 SONGS OF THE WEEK</h1>
        </div>
        <div className="contain" >
          <div className="spot">
            <span>1</span>
          </div>
          <div className="embeded">
            <iframe src={first.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="information" onClick={() => setSocial(true)}>
            <div className="song">
              <div className="songtitle">
                <span>{first.Song}</span>
              </div>
              <div className="artist">
                <span>{first.Artist}</span>
              </div>
            </div>
            <hr />
            <div className="position">
              <div className="lastweek">
                <span className='jio'>
                  Last week position
                </span>
                <span className='num'>8</span>
              </div>
              <div className="verticalline">
              </div>
              <div className="lastweek">
                <span className='jio'>
                  Weeks in chart
                </span>
                <span className='num'>5</span>
              </div>
            </div>
          </div>
          <div className="socilas">
            {social ?
              (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 22 19"
                  className='socialicon'
                  onClick={() => {
                    setSocial(false);
                  }}
                >
                  <path
                    id="Icon_open-share-boxed"
                    data-name="Icon open-share-boxed"
                    d="M2.063,0A2.064,2.064,0,0,0,0,2.036V16.964A2.064,2.064,0,0,0,2.063,19H14.438A2.064,2.064,0,0,0,16.5,16.964V13.571H13.75v2.714h-11V2.714h5.5V0ZM16.5,0V2.714A10.872,10.872,0,0,0,5.665,12.3,5.447,5.447,0,0,1,11,8.143h5.5v2.714L22,5.429Z"
                    fill="#f7d046"
                  />
                </svg>
              ) : (
                <div className='iconsline'>
                  <WhatsappShareButton url={window.location.href} title={`${first.Song} is at number 1 on the Ethiopia Music Chart. Check it out:`}>
                  <div className="socialinfo">
                    
                    <WhatsApp className='socialicon' />
                    <div className="info">
                      <span>WhatsApp</span>
                    </div>
                  </div>
                  </WhatsappShareButton>
                  <FacebookShareButton
                    url={window.location.href}
                    title={`${first.Song} is at number 1 on the Ethiopia Music Chart. Check it out:`}
                    quote={`${first.Song} is at number 1 on the Ethiopia Music Chart. Check it out:`}
                  >
                    <div className="socialinfo">
                      <FacebookIcon className='socialicon' />
                      <div className="info">
                        <span>Facebook</span>
                      </div>
                    </div>
                  </FacebookShareButton>
                  <TwitterShareButton url={window.location.href} title={`${first.Song} is at number 1 on the Ethiopia Music Chart. Check it out:`}>
                    <div className="socialinfo">
                      <TwitterIcon className='socialicon' />
                      <div className="info">
                        <span>Twitter</span>
                      </div>
                    </div>
                  </TwitterShareButton>
                  <TelegramShareButton url={window.location.href} title={`${first.Song} is at number 1 on the Ethiopia Music Chart. Check it out:`}>
                    <div className="socialinfo">
                      <TelegramIcon className='socialicon' />
                      <div className="info">
                        <span>Telegram</span>
                      </div>
                    </div>
                  </TelegramShareButton>
                  <div className="socialinfo" onClick={copy}>
                    <LinkIcon className='socialicon' />
                    <div className="info">
                      <span>Copy link</span>
                    </div>
                  </div>
                </div>
              )
            }

          </div>
        </div>

      </div>
      <div className="slider">
        <div className="leftslider">
          <ArrowBackIosNewOutlined onClick={() => nion("l")} className="arrow" />
        </div>
        <div className="slidingness">
          <div className="slidertitle">
            <span>
              Ethiopia Music Chart this week IN THE CHART
            </span>
          </div>
          <div className="slidertitle">
            <span>
              Week of May 21st, 2022
            </span>
          </div>
          <div
            className="slidercomponent"
            style={{ transform: `translateX(${-100 * itemm}vw)` }}
          >
            {jsonfile.map((item, i) => (
              <div className="slidersaltogether">
                <div className="sliderimage">
                  <img src={item.img} alt="" />
                </div>
                <div className="artistport">
                  <span className='artistname'>
                    {item.Artist}
                  </span>
                  <span className='artistsong'>
                    {item.Song}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rightslider">
          <ArrowForwardIosOutlined onClick={() => nion("r")} className="arrow" />
        </div>

      </div>
      <div className="tablecontent">
        <hr />
        <table className='tableing'>
          <tbody className='tablebody'>
            {jsonfile.map((item, index) => (
              <>
                {on ? (
                  <>
                    <tr className='tablerow'>
                      <td className='tablenumber'>
                        {index + 2}
                      </td>
                      <td className='tableimage'>
                        {/* <iframe
                                className='embededdiv'
                                src="" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              >
                              </iframe> 
                          */}
                        <img src={item.img} alt="" />
                      </td>
                      <td
                        className='tableinfo'
                        onClick={(e) => {
                          setOn(!on);
                          setTableSocials(!tableSocilas);
                          setSec(index);
                        }}
                      >
                        <div className="tableartistinfo">
                          <span className="tableartistinfoname">
                            {item.Song}
                          </span>
                          <span className="tableartistinfosong">
                            {item.Artist}
                          </span>
                        </div>
                        <hr />
                        <div className="tablepositoin">
                          <div className="lastweekspositoin">
                            <span className="lastweeking">
                              Last week position
                            </span>
                            <span className="lastweekingnumb">
                              4
                            </span>
                          </div>
                          <div className="verticalposition">
                          </div>
                          <div className="lastweekspositoin">
                            <span className="lastweeking">
                              Week in chart
                            </span>
                            <span className="lastweekingnumb">
                              5
                            </span>
                          </div>
                          <div className="verticalposition">
                          </div>
                          <div className="lastweekspositoin">
                            <span className="lastweeking">
                              Peak position
                            </span>
                            <span className="lastweekingnumb">
                              1
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="tableicons" onClick={() => { setTableSocials(!tableSocilas) }}>
                        <div className="divicons" >
                          {tableSocilas || sec !== index ?
                            (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 22 19"
                                onClick={() => {
                                  // setTableSocials(false)
                                  setSec(index)
                                }}
                              >
                                <path id="Icon_open-share-boxed" data-name="Icon open-share-boxed" d="M2.063,0A2.064,2.064,0,0,0,0,2.036V16.964A2.064,2.064,0,0,0,2.063,19H14.438A2.064,2.064,0,0,0,16.5,16.964V13.571H13.75v2.714h-11V2.714h5.5V0ZM16.5,0V2.714A10.872,10.872,0,0,0,5.665,12.3,5.447,5.447,0,0,1,11,8.143h5.5v2.714L22,5.429Z" fill="#e02e4d" />
                              </svg>
                            ) : (
                              <div className='iconsline'>
                                <WhatsappShareButton url={window.location.href} title={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}>
                                <div className="socialinfo">
                                  
                                  <WhatsApp className='socialicon' />
                                  <div className="info">
                                    <span>WhatsApp</span>
                                  </div>
                                </div>
                                </WhatsappShareButton>
                                <FacebookShareButton
                                  url={window.location.href}
                                  title={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}
                                  quote={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}
                                  summary={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}
                                  description={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}
                                >
                                  <div className="socialinfo">
                                    <FacebookIcon className='socialicon' />
                                    <div className="info">
                                      <span>Facebook</span>
                                    </div>
                                  </div>
                                </FacebookShareButton>
                                <TwitterShareButton url={window.location.href} title={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}>
                                  <div className="socialinfo">
                                    <TwitterIcon className='socialicon' />
                                    <div className="info">
                                      <span>Twitter</span>
                                    </div>
                                  </div>
                                </TwitterShareButton>
                                <TelegramShareButton url={window.location.href} title={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}>
                                  <div className="socialinfo">
                                    <TelegramIcon className='socialicon' />
                                    <div className="info">
                                      <span>Telegram</span>
                                    </div>
                                  </div>
                                </TelegramShareButton>
                                <div className="socialinfo" onClick={copy}>
                                  <LinkIcon className='socialicon' />
                                  <div className="info">
                                    <span>Copy link</span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                        </div>
                      </td>
                    </tr>
                    {index === sec ?
                      (
                        <>
                          <tr className='secarea'>
                            <td>
                            </td>
                            <td colSpan={5}>
                              <div className="divide">
                                <iframe
                                  src={item.link}
                                  className='embededdiv'
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                >
                                </iframe>
                              </div>
                            </td>
                          </tr>
                        </>
                      ) : (
                        <tr style={{ display: "none" }} >
                        </tr>
                      )}
                    <tr className='linerow'>
                      <td colSpan={7} className="newtd">
                        <hr />
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr className='tablerow' >
                      <td className='tablenumber'>
                        {index + 2}
                      </td>
                      <td className='tableimage'>
                        <img src={item.img} alt="" />
                      </td>
                      <td
                        className='tableinfo'
                        onClick={(e) => {
                          setOn(!on)
                          setSec(index)
                          setTableSocials(false)
                        }}
                      >
                        <div className="tableartistinfo">
                          <span className="tableartistinfoname">
                            {item.Song}
                          </span>
                          <span className="tableartistinfosong">
                            {item.Artist}
                          </span>
                        </div>
                        <hr />
                        <div className="tablepositoin">
                          <div className="lastweekspositoin">
                            <span className="lastweeking">
                              Last week position
                            </span>
                            <span className="lastweekingnumb">
                              4
                            </span>
                          </div>
                          <div className="verticalposition">
                          </div>
                          <div className="lastweekspositoin">
                            <span className="lastweeking">
                              Week in chart
                            </span>
                            <span className="lastweekingnumb">
                              5
                            </span>
                          </div>
                          <div className="verticalposition">
                          </div>
                          <div className="lastweekspositoin">
                            <span className="lastweeking">
                              Peak position
                            </span>
                            <span className="lastweekingnumb">
                              1
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="tableicons" onClick={() => { setTableSocials(!tableSocilas) }}>
                        <div className="divicons">
                          {tableSocilas || sec !== index ?
                            (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 22 19"
                                onClick={() => {
                                  // setTableSocials(false)
                                  setSec(index)
                                }}
                              >
                                <path id="Icon_open-share-boxed" data-name="Icon open-share-boxed" d="M2.063,0A2.064,2.064,0,0,0,0,2.036V16.964A2.064,2.064,0,0,0,2.063,19H14.438A2.064,2.064,0,0,0,16.5,16.964V13.571H13.75v2.714h-11V2.714h5.5V0ZM16.5,0V2.714A10.872,10.872,0,0,0,5.665,12.3,5.447,5.447,0,0,1,11,8.143h5.5v2.714L22,5.429Z" fill="#e02e4d" />
                              </svg>
                            ) : (
                              <div className='iconsline'>
                                 <WhatsappShareButton url={window.location.href} title={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}>
                                <div className="socialinfo">
                                 
                                  <WhatsApp className='socialicon' />
                                  <div className="info">
                                    <span>WhatsApp</span>
                                  </div>
                                </div>
                                </WhatsappShareButton>
                                <FacebookShareButton
                                  url={window.location.href}
                                  description={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}

                                  title={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}
                                  quote={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}
                                  summary={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}
                                >
                                  <div className="socialinfo">
                                    <FacebookIcon className='socialicon' />
                                    <div className="info">
                                      <span>Facebook</span>
                                    </div>
                                  </div>
                                </FacebookShareButton>
                                <TwitterShareButton url={window.location.href} title={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}>
                                  <div className="socialinfo">
                                    <TwitterIcon className='socialicon' />
                                    <div className="info">
                                      <span>Twitter</span>
                                    </div>
                                  </div>
                                </TwitterShareButton>
                                <TelegramShareButton url={window.location.href} title={`${item.Song} is at number ${index + 2} on the Ethiopia Music Chart. Check it out:`}>
                                  <div className="socialinfo">
                                    <TelegramIcon className='socialicon' />
                                    <div className="info">
                                      <span>Telegram</span>
                                    </div>
                                  </div>
                                </TelegramShareButton>
                                <div className="socialinfo" onClick={copy}>
                                  <LinkIcon className='socialicon' />
                                  <div className="info">
                                    <span>Copy link</span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                        </div>
                      </td>
                    </tr>
                    <tr className='linerow'>
                      <td colSpan={12} className="newtd">
                        <hr />
                      </td>
                    </tr>
                  </>
                )}
              </>
            ))
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}