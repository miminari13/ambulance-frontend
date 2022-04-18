import type { NextPage } from 'next'
import { useRouter } from 'next/router' // for adding active class on link
import Link from 'next/link'



const navigationTeams = [
  {id: 1, title: 'All Medical Teams', path: '/dashboard/medical-teams'},
  {id: 2, title: 'Medical Teams Profiles', path: '/dashboard/medical-teams-profiles'},
  {id: 3, title: 'Medical Teams Schedules', path: '/dashboard/medical-teams-schedules'},
];

const Sidebar: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <div className="sidebar p-2 py-md-3">
      <div className="container-fluid">
        <div className="title-text d-flex align-items-center mb-5 mt-1">
          <h4 className="sidebar-title mb-0 flex-grow-1">
            <span className="sm-txt">Ambulance</span> space
          </h4>
        </div>

        <div className="main-menu flex-grow-1">
          <ul className="menu-list">
            <li className="divider py-2 lh-sm">
              <span className="small">MAIN</span><br></br>
              <small className="text-muted">main dashboard services</small>
            </li>
            <li>
              <a className="m-link" href="/dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                    <path className="fill-secondary" fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                </svg>
                <span className="ms-2">My Dashboard</span>
              </a>
            </li>
            <li className="collapsed">
              <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Applications" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
                    <path className="fill-secondary" d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                </svg>
                <span className="ms-2">Applications</span>
                <span className="arrow fa fa-angle-right ms-auto text-end"></span>
              </a>
                <ul className="sub-menu collapse" id="menu-Applications">
                <li><a className="ms-link" href="#">Calendar</a></li>
                <li><a className="ms-link" href="#">Email App</a></li>
                <li><a className="ms-link" href="#">Chat app</a></li>
                <li><a className="ms-link" href="#">Todo App</a></li>
              </ul>
            </li>
            <li className="divider py-2 lh-sm"><span className="small">Ambulance</span></li>
            <li>
              <a className="m-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 18 18">
                    <path className="fill-secondary" fillRule="evenodd" d="M5.35374 3.00488C5.29306 2.91729 5.2099 2.84676 5.11257 2.80033C5.01524 2.7539 4.90714 2.7332 4.79906 2.74028C4.69097 2.74737 4.58668 2.782 4.49658 2.84072C4.40649 2.89943 4.33374 2.98018 4.2856 3.07491C4.23745 3.16965 4.2156 3.27504 4.22221 3.38059C4.22882 3.48614 4.26367 3.58816 4.32328 3.67646C4.38289 3.76475 4.46518 3.83625 4.56193 3.88381C4.65868 3.93138 4.76652 3.95334 4.87469 3.94752L5.04273 4.27071C4.73698 4.48779 4.47076 4.75347 4.25517 5.05665L4.20501 5.1252L3.67578 4.92688C3.66595 4.80927 3.63092 4.69499 3.57295 4.59145C3.4916 4.44997 3.3691 4.33521 3.22093 4.2617C3.07277 4.18819 2.9056 4.15923 2.74057 4.17847C2.57554 4.19772 2.42006 4.26431 2.29381 4.36982C2.16755 4.47533 2.07618 4.61502 2.03127 4.77123C1.98635 4.92743 1.9899 5.09314 2.04146 5.24737C2.09303 5.40161 2.19029 5.53745 2.32096 5.63772C2.45162 5.73799 2.60981 5.79818 2.77552 5.81068C2.94123 5.82317 3.10702 5.78741 3.2519 5.70792C3.33471 5.66315 3.4093 5.60523 3.47262 5.53653L3.88898 5.70058C3.70928 6.13409 3.62387 6.59934 3.63816 7.06679H3.22181C3.12837 6.97325 3.0063 6.9119 2.87402 6.89201C2.74174 6.87211 2.60642 6.89474 2.48847 6.95649C2.37052 7.01823 2.27634 7.11574 2.22012 7.23431C2.16391 7.35288 2.14871 7.48607 2.17682 7.61381C2.20493 7.74154 2.27483 7.85689 2.37598 7.94246C2.47712 8.02802 2.60402 8.07916 2.73754 8.08817C2.87106 8.09717 3.00396 8.06355 3.1162 7.99237C3.22843 7.9212 3.31392 7.81633 3.35976 7.69358H3.70839C3.762 7.94722 3.84619 8.19378 3.95921 8.4281L3.19672 8.91533C3.0891 8.89247 2.97708 8.89925 2.87317 8.93492C2.76037 8.9732 2.66137 9.04262 2.58819 9.13475C2.51501 9.22687 2.47079 9.33776 2.46089 9.45394C2.451 9.57012 2.47586 9.6866 2.53246 9.78926C2.58905 9.89192 2.67495 9.97634 2.77973 10.0323C2.88452 10.0882 3.00367 10.1133 3.12275 10.1044C3.24183 10.0955 3.35571 10.0531 3.45058 9.98228C3.54545 9.91146 3.61722 9.81529 3.6572 9.70543C3.69717 9.59558 3.70363 9.47676 3.67578 9.36339L4.32038 8.99613C4.53498 9.27388 4.79316 9.51681 5.08537 9.71596L5.15058 9.76248L4.94241 10.2301C4.75902 10.2212 4.5777 10.2712 4.42618 10.3725C4.27466 10.4737 4.16128 10.6206 4.10338 10.7907C4.04548 10.9608 4.04626 11.1447 4.10558 11.3143C4.1649 11.484 4.27951 11.6299 4.43187 11.73C4.58424 11.83 4.76597 11.8785 4.94927 11.8682C5.13258 11.8578 5.30736 11.7892 5.4469 11.6726C5.58643 11.5561 5.68303 11.3982 5.72192 11.2231C5.76081 11.0479 5.73985 10.8651 5.66225 10.7027C5.63015 10.6308 5.58608 10.5646 5.53182 10.5068L5.72997 10.0661C6.18369 10.2475 6.67224 10.331 7.16213 10.3109L7.20978 10.8349C7.09269 10.9199 7.00763 11.0402 6.96781 11.1772C6.92799 11.3143 6.93566 11.4603 6.98961 11.5926C7.04356 11.725 7.14077 11.8362 7.26615 11.909C7.39153 11.9819 7.53804 12.0123 7.68293 11.9955C7.82782 11.9787 7.96297 11.9156 8.06738 11.8162C8.17178 11.7167 8.2396 11.5863 8.2603 11.4453C8.28099 11.3043 8.2534 11.1606 8.18181 11.0365C8.11022 10.9124 7.99864 10.8148 7.86441 10.759L7.81676 10.2399C8.35266 10.1237 8.85178 9.88263 9.27149 9.53723L9.63518 9.88735C9.60536 9.96017 9.58676 10.0369 9.58 10.1151C9.56435 10.2928 9.6087 10.4707 9.70627 10.6216C9.80385 10.7725 9.9493 10.8881 10.1204 10.9507C10.2916 11.0134 10.479 11.0197 10.6542 10.9687C10.8293 10.9177 10.9826 10.8121 11.0906 10.6681C11.1986 10.5242 11.2553 10.3497 11.2523 10.1713C11.2492 9.99287 11.1864 9.82034 11.0735 9.68C10.9606 9.53967 10.8038 9.43923 10.627 9.394C10.4502 9.34877 10.2631 9.36124 10.0942 9.4295L9.71795 9.08917C9.7656 9.03041 9.81326 8.9692 9.8559 8.90799C10.0424 8.65162 10.1902 8.37045 10.2948 8.07308L10.819 8.22733C10.8678 8.32943 10.9448 8.4162 11.0414 8.47786C11.138 8.53951 11.2503 8.57361 11.3657 8.5763C11.4811 8.57898 11.5949 8.55016 11.6944 8.49307C11.7939 8.43598 11.8751 8.3529 11.9288 8.25319C11.9825 8.15347 12.0066 8.0411 11.9984 7.92872C11.9902 7.81635 11.95 7.70845 11.8824 7.61718C11.8147 7.52591 11.7223 7.4549 11.6155 7.41216C11.5087 7.36943 11.3918 7.35665 11.278 7.37529C11.1384 7.39853 11.0116 7.46868 10.9194 7.57361L10.4453 7.4267C10.4927 7.08421 10.4868 6.73669 10.4278 6.39592C10.3713 6.08672 10.2708 5.78674 10.1293 5.5047L10.5456 5.29414C10.6551 5.35051 10.7782 5.37675 10.9018 5.37004C11.0337 5.36265 11.1605 5.31732 11.2661 5.23975C11.3717 5.16218 11.4514 5.05584 11.4952 4.93413C11.5391 4.81242 11.545 4.68077 11.5123 4.55577C11.4797 4.43077 11.4098 4.31799 11.3116 4.23165C11.2134 4.14531 11.0913 4.08927 10.9605 4.07057C10.8297 4.05187 10.6962 4.07136 10.5768 4.12658C10.4573 4.1818 10.3573 4.27029 10.2893 4.38089C10.2213 4.4915 10.1883 4.61928 10.1945 4.74815L9.77313 4.95871C9.59108 4.72471 9.37861 4.51483 9.14107 4.33437L9.52231 3.62678C9.6977 3.65842 9.87886 3.63475 10.0396 3.5592C10.2003 3.48366 10.3322 3.36015 10.4162 3.20656C10.5002 3.05298 10.532 2.87727 10.5069 2.70489C10.4818 2.53251 10.4012 2.37239 10.2767 2.24771C10.1522 2.12302 9.99027 2.04025 9.81438 2.01137C9.63849 1.98248 9.45774 2.00899 9.29831 2.08704C9.13887 2.1651 9.00902 2.29065 8.92754 2.44554C8.84607 2.60042 8.81719 2.7766 8.84511 2.94857C8.86405 3.06386 8.90764 3.17398 8.97302 3.27176L8.59429 3.99159C8.21992 3.80568 7.81335 3.68944 7.39539 3.64881L7.34773 3.23993C7.46148 3.1701 7.54888 3.06605 7.59676 2.94349C7.64464 2.82093 7.6504 2.6865 7.61318 2.56046C7.57595 2.43443 7.49776 2.32362 7.39038 2.24476C7.28301 2.1659 7.15228 2.12325 7.01791 2.12325C6.88354 2.12325 6.75281 2.1659 6.64544 2.24476C6.53806 2.32362 6.45987 2.43443 6.42264 2.56046C6.38542 2.6865 6.39118 2.82093 6.43906 2.94349C6.48694 3.06605 6.57434 3.1701 6.68809 3.23993L6.73323 3.64881C6.64294 3.64881 6.55265 3.6684 6.45984 3.68554C6.16863 3.73196 5.88461 3.81423 5.61459 3.93038L5.41143 3.56312C5.45114 3.47126 5.46666 3.37116 5.45658 3.27194C5.44651 3.17273 5.41115 3.07755 5.35374 2.99509V3.00488ZM5.84284 4.96361C6.0384 4.93009 6.23975 4.95397 6.4214 5.03222C6.60304 5.11048 6.75682 5.23959 6.86326 5.4032C6.9697 5.56682 7.02401 5.75759 7.01932 5.95136C7.01463 6.14512 6.95114 6.33317 6.8369 6.4917C6.72266 6.65023 6.56281 6.7721 6.37757 6.84189C6.19234 6.91167 5.99006 6.92624 5.79634 6.88374C5.60262 6.84124 5.42618 6.74358 5.28934 6.60314C5.15251 6.46269 5.06145 6.28577 5.02768 6.09477C4.98252 5.8393 5.04296 5.57677 5.19576 5.36473C5.34857 5.15269 5.58126 5.00844 5.84284 4.96361ZM7.11447 7.47077C7.31014 7.43715 7.51163 7.461 7.69339 7.53929C7.87516 7.61759 8.02902 7.7468 8.13548 7.91055C8.24193 8.0743 8.29618 8.26521 8.29136 8.4591C8.28653 8.65298 8.22284 8.8411 8.10837 8.99961C7.99389 9.15812 7.83378 9.27989 7.64834 9.34947C7.46289 9.41905 7.26045 9.43332 7.06669 9.39046C6.87293 9.3476 6.69656 9.24955 6.55995 9.10874C6.42334 8.96792 6.33263 8.79068 6.29932 8.59949C6.25342 8.34364 6.31352 8.08048 6.46639 7.86788C6.61926 7.65529 6.85238 7.51068 7.11447 7.46588V7.47077ZM8.58677 5.61488C8.69867 5.59572 8.81388 5.60937 8.91783 5.65413C9.02178 5.69889 9.1098 5.77274 9.17075 5.86634C9.2317 5.95993 9.26285 6.06907 9.26025 6.17995C9.25765 6.29083 9.22143 6.39846 9.15616 6.48924C9.09089 6.58002 8.9995 6.64986 8.89356 6.68994C8.78762 6.73001 8.67189 6.73851 8.561 6.71437C8.45011 6.69023 8.34905 6.63452 8.27059 6.55431C8.19214 6.47409 8.13982 6.37296 8.12025 6.26371C8.10692 6.19117 8.10843 6.11678 8.1247 6.04482C8.14097 5.97285 8.17168 5.90475 8.21505 5.84443C8.25842 5.78411 8.3136 5.73277 8.3774 5.69337C8.44119 5.65398 8.51235 5.6273 8.58677 5.61488Z"></path>
                    <path d="M14.625 1.125C15.2217 1.125 15.794 1.36205 16.216 1.78401C16.6379 2.20597 16.875 2.77826 16.875 3.375V14.625C16.875 15.2217 16.6379 15.794 16.216 16.216C15.794 16.6379 15.2217 16.875 14.625 16.875H3.375C2.77826 16.875 2.20597 16.6379 1.78401 16.216C1.36205 15.794 1.125 15.2217 1.125 14.625V3.375C1.125 2.77826 1.36205 2.20597 1.78401 1.78401C2.20597 1.36205 2.77826 1.125 3.375 1.125H14.625ZM3.375 0C2.47989 0 1.62145 0.355579 0.988515 0.988515C0.355579 1.62145 0 2.47989 0 3.375L0 14.625C0 15.5201 0.355579 16.3786 0.988515 17.0115C1.62145 17.6444 2.47989 18 3.375 18H14.625C15.5201 18 16.3786 17.6444 17.0115 17.0115C17.6444 16.3786 18 15.5201 18 14.625V3.375C18 2.47989 17.6444 1.62145 17.0115 0.988515C16.3786 0.355579 15.5201 0 14.625 0L3.375 0Z"></path>
                    <path className="fill-secondary" d="M15.1875 13.5C15.1875 13.9476 15.0097 14.3768 14.6932 14.6932C14.3768 15.0097 13.9476 15.1875 13.5 15.1875C13.0524 15.1875 12.6232 15.0097 12.3068 14.6932C11.9903 14.3768 11.8125 13.9476 11.8125 13.5C11.8125 13.0524 11.9903 12.6232 12.3068 12.3068C12.6232 11.9903 13.0524 11.8125 13.5 11.8125C13.9476 11.8125 14.3768 11.9903 14.6932 12.3068C15.0097 12.6232 15.1875 13.0524 15.1875 13.5Z"></path>
                </svg>
                <span className="ms-2">Covid-19 Dashboard</span>
              </a>
            </li>
            <li className="collapsed">
              <div className="m-link cursor-pointer" data-bs-toggle="collapse" data-bs-target="#menu-Doctor">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 18 18">
                      <path d="M13.5 4.5C14.5 5.5 14.8958 4.16351 14.8958 5.81323C14.8958 7.17269 16 7 14.8958 7.86936C14.9492 9.24213 14.9661 10.5596 14.7708 11.8964C14.5612 13.3424 14.125 14.5873 13.345 15.4954C12.5299 16.4448 11.3802 17 9.78511 17C7.50775 17 6.21998 15.9854 5.49732 14.5487C4.90356 13.369 4.73169 11.9323 4.69913 10.5782C4.37361 10.3439 4.04678 10.0243 3.72647 9.64484C3.26162 9.09227 2.79938 8.40389 2.38531 7.67423C2.26813 7.46652 2.26162 7.22419 2.34755 7.02047C2.32542 6.97653 2.30328 6.93393 2.28115 6.88999C1.3788 5.08315 0.790252 3.11388 1.0702 2.25373C1.20171 1.84896 1.51682 1.58266 1.98036 1.43487C2.35537 1.31636 2.84105 1.27642 3.41527 1.30571C3.46605 1.25911 3.52465 1.21384 3.59235 1.17123C3.66657 1.1233 3.7421 1.08602 3.81631 1.05805C4.52856 0.787762 5.25773 1.5081 4.9296 2.25107C4.78117 2.58794 4.45304 2.83293 4.10017 2.82361C3.76944 2.81429 3.51032 2.59326 3.32152 2.33362L3.3098 2.30966C2.8736 2.29235 2.52073 2.31898 2.26943 2.39887C2.11839 2.4468 2.02594 2.50405 2.0038 2.5693C1.80719 3.17246 2.35797 4.83017 3.15746 6.42929C3.19001 6.49453 3.22256 6.55978 3.25641 6.62369C3.40485 6.68094 3.53506 6.78879 3.621 6.94058C3.9934 7.59834 4.40226 8.20949 4.8046 8.6875C5.01684 8.93915 5.22127 9.1482 5.41008 9.30265C5.43482 9.30265 5.45956 9.30398 5.48299 9.30664C5.66268 9.17483 5.8619 8.98309 6.07024 8.74875C6.49602 8.27207 6.92832 7.64095 7.32155 6.96189C7.40749 6.81409 7.53509 6.7089 7.68092 6.65165C8.51687 5.07117 9.11974 3.38151 8.99604 2.71576C8.96739 2.56397 8.83588 2.46544 8.64447 2.4002C8.39968 2.31631 8.08067 2.28303 7.73431 2.27371C7.7252 2.29368 7.71478 2.31365 7.70436 2.33495C7.51556 2.5946 7.25644 2.81562 6.92571 2.82494C6.57284 2.83426 6.24602 2.58927 6.09628 2.2524C5.76815 1.50943 6.49732 0.789093 7.20957 1.05805C7.28509 1.08602 7.35931 1.12463 7.43353 1.17123C7.4804 1.20052 7.52207 1.23248 7.56113 1.2631C8.06634 1.26444 8.55593 1.30438 8.95567 1.44286C9.48042 1.62394 9.85672 1.95415 9.96349 2.52935C10.1236 3.39615 9.49344 5.31217 8.59109 7.0471C8.67703 7.25348 8.66921 7.49715 8.54942 7.70619C8.10931 8.46647 7.61582 9.18148 7.12363 9.73272C6.7968 10.0989 6.46086 10.4025 6.12623 10.6142C6.15748 11.7699 6.30071 12.9629 6.76165 13.879C7.24993 14.8496 8.15098 15.5367 9.7799 15.5367C10.9244 15.5367 11.7239 15.1679 12.2669 14.5354C12.8463 13.8617 13.1784 12.8697 13.3515 11.686C13.5299 10.4597 13.5143 9.22748 13.4648 7.92395C12.1471 7.63635 13 6.93668 13 5.5C14 5 13.5 6 13.5 4.5Z"></path>
                      <path className="fill-secondary" d="M16.1213 7.12132C15.5587 7.68393 14.7956 8 14 8C13.2044 8 12.4413 7.68393 11.8787 7.12132C11.3161 6.55871 11 5.79565 11 5C11 4.20435 11.3161 3.44129 11.8787 2.87868C12.4413 2.31607 13.2044 2 14 2C14.7956 2 15.5587 2.31607 16.1213 2.87868C16.6839 3.44129 17 4.20435 17 5C17 5.79565 16.6839 6.55871 16.1213 7.12132Z"></path>
                  </svg>
                  <span className="ms-2">Medical teams</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end"></span>
              </div>
              <ul className="sub-menu collapse" id="menu-Doctor">
                {navigationTeams.map( ({id, path, title}) => (
                  <li key={id}>
                    <Link href={path}>
                      <a className={(pathname === path ? 'active' : '') + ' ms-link'}>{title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="collapsed">
              <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Patient" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M13.5 17L14.625 17C15.2217 17 15.794 16.7629 16.216 16.341C16.6379 15.919 16.875 15.3467 16.875 14.75L16.875 2.9375C16.875 2.34076 16.6379 1.76847 16.216 1.34651C15.794 0.924553 15.2217 0.6875 14.625 0.6875L3.375 0.687501C2.77826 0.687501 2.20597 0.924555 1.78401 1.34651C1.36205 1.76847 1.125 2.34076 1.125 2.9375L1.125 14.75C1.125 15.3467 1.36205 15.919 1.78401 16.341C2.20597 16.7629 2.77826 17 3.375 17L4.5 17L4.5 15.875L3.375 15.875C3.07663 15.875 2.79048 15.7565 2.5795 15.5455C2.36853 15.3345 2.25 15.0484 2.25 14.75L2.25 2.9375C2.25 2.63913 2.36853 2.35298 2.5795 2.14201C2.79048 1.93103 3.07663 1.8125 3.375 1.8125L14.625 1.8125C14.9234 1.8125 15.2095 1.93103 15.4205 2.14201C15.6315 2.35298 15.75 2.63913 15.75 2.9375L15.75 14.75C15.75 15.0484 15.6315 15.3345 15.4205 15.5455C15.2095 15.7565 14.9234 15.875 14.625 15.875L13.5 15.875L13.5 17Z"></path>
                    <path className="fill-secondary" d="M4 18C4 18 3 18 3 17C3 16 4 13 9 13C14 13 15 16 15 17C15 18 14 18 14 18H4ZM9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12Z"></path>
                    <path className="fill-secondary" d="M5.14645 3.85355C5.05268 3.75979 5 3.63261 5 3.5C5 3.36739 5.05268 3.24021 5.14645 3.14645C5.24021 3.05268 5.36739 3 5.5 3H12.5C12.6326 3 12.7598 3.05268 12.8536 3.14645C12.9473 3.24021 13 3.36739 13 3.5C13 3.63261 12.9473 3.75979 12.8536 3.85355C12.7598 3.94732 12.6326 4 12.5 4H5.5C5.36739 4 5.24021 3.94732 5.14645 3.85355Z"></path>
                </svg>
                <span className="ms-2">Patient</span>
                <span className="arrow fa fa-angle-right ms-auto text-end"></span>
              </a>
              <ul className="sub-menu collapse" id="menu-Patient">
                <li><a className="ms-link" href="#">Patient List</a></li>
                <li><a className="ms-link" href="#">Add new patient</a></li>
                <li><a className="ms-link" href="#">Patient Profile</a></li>
                <li><a className="ms-link" href="#">Patient Invoices</a></li>
              </ul>
            </li>
            <li className="collapsed">
              <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Payments" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M15.75 3.375C16.0484 3.375 16.3345 3.49353 16.5455 3.7045C16.7565 3.91548 16.875 4.20163 16.875 4.5V13.5C16.875 13.7984 16.7565 14.0845 16.5455 14.2955C16.3345 14.5065 16.0484 14.625 15.75 14.625H2.25C1.95163 14.625 1.66548 14.5065 1.4545 14.2955C1.24353 14.0845 1.125 13.7984 1.125 13.5V4.5C1.125 4.20163 1.24353 3.91548 1.4545 3.7045C1.66548 3.49353 1.95163 3.375 2.25 3.375H15.75ZM2.25 2.25C1.65326 2.25 1.08097 2.48705 0.65901 2.90901C0.237053 3.33097 0 3.90326 0 4.5L0 13.5C0 14.0967 0.237053 14.669 0.65901 15.091C1.08097 15.5129 1.65326 15.75 2.25 15.75H15.75C16.3467 15.75 16.919 15.5129 17.341 15.091C17.7629 14.669 18 14.0967 18 13.5V4.5C18 3.90326 17.7629 3.33097 17.341 2.90901C16.919 2.48705 16.3467 2.25 15.75 2.25H2.25Z"></path>
                    <path className="fill-secondary" d="M2.25 6.1875C2.25 6.03832 2.30926 5.89524 2.41475 5.78975C2.52024 5.68426 2.66332 5.625 2.8125 5.625H5.0625C5.21168 5.625 5.35476 5.68426 5.46025 5.78975C5.56574 5.89524 5.625 6.03832 5.625 6.1875V7.3125C5.625 7.46168 5.56574 7.60476 5.46025 7.71025C5.35476 7.81574 5.21168 7.875 5.0625 7.875H2.8125C2.66332 7.875 2.52024 7.81574 2.41475 7.71025C2.30926 7.60476 2.25 7.46168 2.25 7.3125V6.1875ZM2.25 9.5625C2.25 9.41332 2.30926 9.27024 2.41475 9.16475C2.52024 9.05926 2.66332 9 2.8125 9H8.4375C8.58668 9 8.72976 9.05926 8.83525 9.16475C8.94074 9.27024 9 9.41332 9 9.5625C9 9.71168 8.94074 9.85476 8.83525 9.96025C8.72976 10.0657 8.58668 10.125 8.4375 10.125H2.8125C2.66332 10.125 2.52024 10.0657 2.41475 9.96025C2.30926 9.85476 2.25 9.71168 2.25 9.5625ZM2.25 11.8125C2.25 11.6633 2.30926 11.5202 2.41475 11.4148C2.52024 11.3093 2.66332 11.25 2.8125 11.25H3.9375C4.08668 11.25 4.22976 11.3093 4.33525 11.4148C4.44074 11.5202 4.5 11.6633 4.5 11.8125C4.5 11.9617 4.44074 12.1048 4.33525 12.2102C4.22976 12.3157 4.08668 12.375 3.9375 12.375H2.8125C2.66332 12.375 2.52024 12.3157 2.41475 12.2102C2.30926 12.1048 2.25 11.9617 2.25 11.8125ZM5.625 11.8125C5.625 11.6633 5.68426 11.5202 5.78975 11.4148C5.89524 11.3093 6.03832 11.25 6.1875 11.25H7.3125C7.46168 11.25 7.60476 11.3093 7.71025 11.4148C7.81574 11.5202 7.875 11.6633 7.875 11.8125C7.875 11.9617 7.81574 12.1048 7.71025 12.2102C7.60476 12.3157 7.46168 12.375 7.3125 12.375H6.1875C6.03832 12.375 5.89524 12.3157 5.78975 12.2102C5.68426 12.1048 5.625 11.9617 5.625 11.8125ZM9 11.8125C9 11.6633 9.05926 11.5202 9.16475 11.4148C9.27024 11.3093 9.41332 11.25 9.5625 11.25H10.6875C10.8367 11.25 10.9798 11.3093 11.0852 11.4148C11.1907 11.5202 11.25 11.6633 11.25 11.8125C11.25 11.9617 11.1907 12.1048 11.0852 12.2102C10.9798 12.3157 10.8367 12.375 10.6875 12.375H9.5625C9.41332 12.375 9.27024 12.3157 9.16475 12.2102C9.05926 12.1048 9 11.9617 9 11.8125ZM12.375 11.8125C12.375 11.6633 12.4343 11.5202 12.5398 11.4148C12.6452 11.3093 12.7883 11.25 12.9375 11.25H14.0625C14.2117 11.25 14.3548 11.3093 14.4602 11.4148C14.5657 11.5202 14.625 11.6633 14.625 11.8125C14.625 11.9617 14.5657 12.1048 14.4602 12.2102C14.3548 12.3157 14.2117 12.375 14.0625 12.375H12.9375C12.7883 12.375 12.6452 12.3157 12.5398 12.2102C12.4343 12.1048 12.375 11.9617 12.375 11.8125Z"></path>
                </svg>
                <span className="ms-2">Statements</span>
                <span className="arrow fa fa-angle-right ms-auto text-end"></span>
              </a>
              <ul className="sub-menu collapse" id="menu-Payments">
                <li><a className="ms-link" href="#">Statements List</a></li>
                <li><a className="ms-link" href="#">Add Statements</a></li>
                <li><a className="ms-link" href="#">Make Invoice</a></li>
              </ul>
            </li>
            <li>
              <a className="m-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M14.7175 2.35666H11.7491V0.392379C11.7491 0.175676 11.5735 0 11.3567 0H6.64325C6.42651 0 6.25087 0.175676 6.25087 0.392379V2.3567H3.28252C2.4555 2.3567 1.78271 3.02948 1.78271 3.8565V17.6077C1.78271 17.8244 1.95836 18 2.17509 18C2.79184 18 15.4249 18 15.8249 18C16.0416 18 16.2173 17.8244 16.2173 17.6077V3.85646C16.2173 3.02952 15.5444 2.35666 14.7175 2.35666ZM7.03563 0.784723H10.9643C10.9643 1.35482 10.9643 4.14404 10.9643 4.7134H7.03563C7.03563 4.14373 7.03563 1.35461 7.03563 0.784723ZM8.6076 17.2152H6.51507V15.1227H8.6076V17.2152ZM11.4849 17.2152H9.39236V15.1227H11.4849V17.2152ZM12.2696 17.2152V14.7303C12.2696 14.5136 12.094 14.3379 11.8772 14.3379C11.0307 14.3379 6.97755 14.3379 6.12269 14.3379C5.90595 14.3379 5.73031 14.5136 5.73031 14.7303V17.2152H2.56747V3.85646C2.56747 3.46215 2.88827 3.14142 3.28252 3.14142H6.25087V5.10578C6.25087 5.32248 6.42651 5.49816 6.64325 5.49816H11.3567C11.5735 5.49816 11.7491 5.32248 11.7491 5.10578V3.14142H14.7175C15.1117 3.14142 15.4325 3.46219 15.4325 3.85646V17.2152H12.2696Z"></path>
                    <path className="fill-secondary" d="M6.05106 6.77929H4.20117C4.04824 6.77929 3.92432 6.90322 3.92432 7.05615V8.90603C3.92432 9.05896 4.04824 9.18289 4.20117 9.18289H6.05106C6.20399 9.18289 6.32791 9.05896 6.32791 8.90603V7.05615C6.32791 6.90322 6.20399 6.77929 6.05106 6.77929Z"></path>
                    <path className="fill-secondary" d="M9.92503 6.77929H8.07511C7.92218 6.77929 7.79825 6.90322 7.79825 7.05615V8.90603C7.79825 9.05896 7.92218 9.18289 8.07511 9.18289H9.925C10.0779 9.18289 10.2019 9.05896 10.2019 8.90603V7.05615C10.2019 6.90322 10.0779 6.77929 9.92503 6.77929Z"></path>
                    <path className="fill-secondary" d="M13.7989 6.77929H11.949C11.7961 6.77929 11.6722 6.90322 11.6722 7.05615V8.90603C11.6722 9.05896 11.7961 9.18289 11.949 9.18289H13.7989C13.9518 9.18289 14.0757 9.05896 14.0757 8.90603V7.05615C14.0757 6.90322 13.9518 6.77929 13.7989 6.77929Z"></path>
                    <path className="fill-secondary" d="M6.05106 10.6532H4.20117C4.04824 10.6532 3.92432 10.7771 3.92432 10.93V12.7799C3.92432 12.9329 4.04824 13.0568 4.20117 13.0568H6.05106C6.20399 13.0568 6.32791 12.9329 6.32791 12.7799V10.93C6.32791 10.7772 6.20399 10.6532 6.05106 10.6532Z"></path>
                    <path className="fill-secondary" d="M9.92503 10.6532H8.07511C7.92218 10.6532 7.79825 10.7771 7.79825 10.93V12.7799C7.79825 12.9329 7.92218 13.0568 8.07511 13.0568H9.925C10.0779 13.0568 10.2019 12.9329 10.2019 12.7799V10.93C10.2019 10.7772 10.0779 10.6532 9.92503 10.6532Z"></path>
                    <path className="fill-secondary" d="M13.7989 10.6532H11.949C11.7961 10.6532 11.6722 10.7771 11.6722 10.93V12.7799C11.6722 12.9329 11.7961 13.0568 11.949 13.0568H13.7989C13.9518 13.0568 14.0757 12.9329 14.0757 12.7799V10.93C14.0757 10.7772 13.9518 10.6532 13.7989 10.6532Z"></path>
                    <path className="fill-secondary" d="M9.75111 1.53855C9.53438 1.53855 9.35873 1.71422 9.35873 1.93093V2.35674H8.64134V1.93089C8.64134 1.71419 8.46569 1.53851 8.24896 1.53851C8.03222 1.53851 7.85658 1.71419 7.85658 1.93089V3.56717C7.85658 3.78387 8.03225 3.95955 8.24896 3.95955C8.46569 3.95955 8.64134 3.78387 8.64134 3.56717V3.14139H9.35873V3.5672C9.35873 3.78391 9.53434 3.95958 9.75111 3.95958C9.96789 3.95958 10.1435 3.78391 10.1435 3.5672V1.93089C10.1435 1.71422 9.96785 1.53855 9.75111 1.53855Z"></path>
                </svg>
                <span className="ms-2">Department</span>
              </a>
            </li>
            <li>
              <a className="m-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 18 18">
                    <path className="fill-secondary" d="M7.62695 11.0501H13.1307C13.1307 10.087 12.349 9.31757 11.3982 9.31757H7.62695V11.0501Z"></path>
                    <path className="fill-secondary" d="M6.02919 11.0377C6.48663 11.0377 6.85745 10.6713 6.85745 10.2193C6.85745 9.76726 6.48663 9.40082 6.02919 9.40082C5.57175 9.40082 5.20093 9.76726 5.20093 10.2193C5.20093 10.6713 5.57175 11.0377 6.02919 11.0377Z"></path>
                    <path className="fill-secondary" d="M13.1895 11.8097H5V13.2285H13.1895V11.8097Z"></path>
                    <path className="fill-secondary" d="M10.7514 4H6.86743V7.87666H10.7441V4H10.7514ZM9.62912 6.2961H9.16353V6.76169C9.16353 6.95528 9.0067 7.11456 8.81066 7.11456C8.61707 7.11456 8.45779 6.95773 8.45779 6.76169V6.2961H7.9922C7.79861 6.2961 7.63933 6.13927 7.63933 5.94323C7.63933 5.74964 7.79616 5.59036 7.9922 5.59036H8.45779V5.11497C8.45779 4.92138 8.61462 4.7621 8.81066 4.7621C9.00425 4.7621 9.16353 4.91893 9.16353 5.11497V5.58056H9.62912C9.82271 5.58056 9.98199 5.73739 9.98199 5.93343V5.94323C9.97954 6.13927 9.82271 6.2961 9.62912 6.2961Z"></path>
                    <path d="M2.25 1.12497C1.95163 1.12497 1.66548 1.2435 1.45451 1.45448C1.24353 1.66545 1.125 1.9516 1.125 2.24997C1.125 2.54834 1.24353 2.83449 1.45451 3.04547C1.66548 3.25644 1.95163 3.37497 2.25 3.37497C2.54837 3.37497 2.83452 3.25644 3.0455 3.04547C3.25647 2.83449 3.375 2.54834 3.375 2.24997C3.375 1.9516 3.25647 1.66545 3.0455 1.45448C2.83452 1.2435 2.54837 1.12497 2.25 1.12497ZM1.10007e-06 2.24997C-0.000540538 1.70195 0.198948 1.17256 0.561024 0.761187C0.9231 0.349809 1.42287 0.0847205 1.96653 0.0156758C2.51018 -0.0533689 3.06035 0.0783781 3.51376 0.386189C3.96718 0.693999 4.29266 1.15671 4.42913 1.68747H13.5709C13.6702 1.30347 13.8692 0.952542 14.1478 0.670245C14.4264 0.387948 14.7747 0.184315 15.1574 0.079982C15.54 -0.0243513 15.9435 -0.0256774 16.3268 0.0761381C16.7101 0.177954 17.0598 0.379292 17.3402 0.659752C17.6207 0.940211 17.822 1.28982 17.9238 1.67316C18.0257 2.0565 18.0243 2.45994 17.92 2.8426C17.8157 3.22527 17.612 3.57355 17.3297 3.85216C17.0474 4.13077 16.6965 4.3298 16.3125 4.4291V13.5708C16.6965 13.6701 17.0474 13.8692 17.3297 14.1478C17.612 14.4264 17.8157 14.7747 17.92 15.1573C18.0243 15.54 18.0257 15.9434 17.9238 16.3268C17.822 16.7101 17.6207 17.0597 17.3402 17.3402C17.0598 17.6206 16.7101 17.822 16.3268 17.9238C15.9435 18.0256 15.54 18.0243 15.1574 17.92C14.7747 17.8156 14.4264 17.612 14.1478 17.3297C13.8692 17.0474 13.6702 16.6965 13.5709 16.3125H4.42913C4.32983 16.6965 4.1308 17.0474 3.85219 17.3297C3.57358 17.612 3.2253 17.8156 2.84263 17.92C2.45997 18.0243 2.05653 18.0256 1.67319 17.9238C1.28985 17.822 0.940241 17.6206 0.659782 17.3402C0.379322 17.0597 0.177984 16.7101 0.0761682 16.3268C-0.0256473 15.9434 -0.0243212 15.54 0.0800121 15.1573C0.184345 14.7747 0.387978 14.4264 0.670275 14.1478C0.952572 13.8692 1.3035 13.6701 1.6875 13.5708V4.4291C1.20443 4.30437 0.776516 4.02262 0.471045 3.62815C0.165574 3.23369 -0.000125701 2.74888 1.10007e-06 2.24997ZM2.8125 4.4291V13.5708C3.60338 13.7733 4.2255 14.3966 4.42913 15.1875H13.5709C13.6717 14.7984 13.8748 14.4433 14.1591 14.159C14.4433 13.8748 14.7984 13.6717 15.1875 13.5708V4.4291C14.7984 4.32822 14.4433 4.12515 14.1591 3.8409C13.8748 3.55666 13.6717 3.20159 13.5709 2.81247H4.42913C4.32825 3.20159 4.12518 3.55666 3.84094 3.8409C3.55669 4.12515 3.20162 4.32822 2.8125 4.4291ZM15.75 1.12497C15.4516 1.12497 15.1655 1.2435 14.9545 1.45448C14.7435 1.66545 14.625 1.9516 14.625 2.24997C14.625 2.54834 14.7435 2.83449 14.9545 3.04547C15.1655 3.25644 15.4516 3.37497 15.75 3.37497C16.0484 3.37497 16.3345 3.25644 16.5455 3.04547C16.7565 2.83449 16.875 2.54834 16.875 2.24997C16.875 1.9516 16.7565 1.66545 16.5455 1.45448C16.3345 1.2435 16.0484 1.12497 15.75 1.12497ZM2.25 14.625C1.95163 14.625 1.66548 14.7435 1.45451 14.9545C1.24353 15.1655 1.125 15.4516 1.125 15.75C1.125 16.0483 1.24353 16.3345 1.45451 16.5455C1.66548 16.7564 1.95163 16.875 2.25 16.875C2.54837 16.875 2.83452 16.7564 3.0455 16.5455C3.25647 16.3345 3.375 16.0483 3.375 15.75C3.375 15.4516 3.25647 15.1655 3.0455 14.9545C2.83452 14.7435 2.54837 14.625 2.25 14.625ZM15.75 14.625C15.4516 14.625 15.1655 14.7435 14.9545 14.9545C14.7435 15.1655 14.625 15.4516 14.625 15.75C14.625 16.0483 14.7435 16.3345 14.9545 16.5455C15.1655 16.7564 15.4516 16.875 15.75 16.875C16.0484 16.875 16.3345 16.7564 16.5455 16.5455C16.7565 16.3345 16.875 16.0483 16.875 15.75C16.875 15.4516 16.7565 15.1655 16.5455 14.9545C16.3345 14.7435 16.0484 14.625 15.75 14.625Z"></path>
                </svg>
                <span className="ms-2">Calls Allotment</span>
              </a>
            </li>
          </ul>

          <ul className="menu-list">
            <li className="divider py-2 lh-sm">
              <span className="small">RESOURCES</span><br></br>
              <small className="text-muted">any special docs and services</small>
            </li>
            <li>
              <a className="m-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                    <path className="fill-secondary" d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"></path>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"></path>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"></path>
                </svg>
                <span className="ms-2">Documentation</span>
              </a>
            </li>
            <li>
              <a className="m-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                    <path className="fill-secondary" d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                </svg>
                <span className="ms-2">Changelog</span>
                <span className="badge bg-primary ms-auto">v1.1.0</span>
              </a>
            </li>
          </ul>
        </div>

        <ul className="menu-list nav navbar-nav flex-row text-center">
          <li className="nav-item flex-fill p-2">
              <a className="d-inline-block w-100 color-400" href="#" data-bs-toggle="modal" data-bs-target="#ScheduleModal" title="My Schedule">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                      <path className="fill-secondary" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                      <path className="fill-secondary" d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"></path>
                  </svg>
              </a>
          </li>
          <li className="nav-item flex-fill p-2">
              <a className="d-inline-block w-100 color-400" href="#" data-bs-toggle="modal" data-bs-target="#MynotesModal" title="My notes">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                      <path className="fill-secondary" d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"></path>
                      <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
                  </svg>
              </a>
          </li>
          <li className="nav-item flex-fill p-2">
              <a className="d-inline-block w-100 color-400" href="#" data-bs-toggle="modal" data-bs-target="#RecentChat">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                      <path className="fill-secondary" d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
              </a>
          </li><li className="nav-item flex-fill p-2">
              <a className="d-inline-block w-100 color-400" href="auth-signin.html" title="sign-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M7.5 1v7h1V1h-1z"></path>
                      <path className="fill-secondary" d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"></path>
                  </svg>
              </a>
          </li>
      </ul>

      </div>
    </div>
  )
}

export default Sidebar