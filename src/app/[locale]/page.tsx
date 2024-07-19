import ApplicationWidget from '@/widgets/applicationWidget/applicationWidget'
import MainBlock from '@/widgets/mainBlock/mainblock'
import PlanWidget from '@/widgets/planWidget/planWidget'
import ProjectWidget from '@/widgets/projectWidget/projectWidget'
import ServicesWidget from '@/widgets/servicesWidget/servicesWidget'
import TechsWidget from '@/widgets/techsWidget/techsWidget'
import TextLen from '@/widgets/textLen/textLen'
import { unstable_setRequestLocale } from 'next-intl/server'

export interface IParams {
  params: { locale: string }
}
export default function App({ params: { locale } }: IParams) {
  unstable_setRequestLocale(locale)
  //   (function() {
  //     // Настройки
  //     var metrikaId = '56454598'; // ID счётчика Яндекс.Метрики

  //     var sendInterval = 30; // Временной шаг отправки событий в секундах

  //     var sessionTimeout = 30 * 60; // Таймаут сессии в секундах (30 минут)

  //     var inactivityTime = 15; // Время бездействия в секундах для паузы таймера

  //     var localStorageKey = 'activeTimeTracker'; // Ключ для localStorage

  //     var sessionTimeKey = 'sessionActiveTime'; // Ключ для времени активности в рамках одной сессии

  //     var activeTime = 0; // Активное время на сайте

  //     var sessionActiveTime = 0; // Активное время в рамках текущей сессии

  //     var isActive = false; // Изначально пользователь считается неактивным

  //     var timer; // Таймер отсчёта активного времени

  //     var inactivityTimer; // Таймер бездействия

  //     function resetInactivityTimer() {

  //         clearTimeout(inactivityTimer);

  //         inactivityTimer = setTimeout(function() {

  //             isActive = false;

  //             clearInterval(timer);

  //             console.log('Пользователь неактивен более ' + inactivityTime + ' секунд.');

  //             // Сброс сессионного таймера после таймаута сессии

  //             if (sessionActiveTime >= sessionTimeout) {

  //                 sessionActiveTime = 0;

  //                 console.log('Сессия завершена из-за неактивности. Сессионное время сброшено.');

  //             }

  //         }, inactivityTime * 1000);

  //     }

  //     function sendActiveTimeToMetrika(activeTime, suffix) {

  //         suffix = suffix || ''; // Установка значения по умолчанию для suffix

  //         if (window['yaCounter' + metrikaId] && typeof window['yaCounter' + metrikaId].reachGoal === 'function') {

  //             window['yaCounter' + metrikaId].reachGoal(activeTime + 'makosec' + suffix);

  //             console.log('Событие ' + activeTime + 'makosec' + suffix + ' отправлено в Яндекс.Метрику.');

  //         } else {

  //             console.log('Счётчик Яндекс.Метрики не инициализирован или не доступен.');

  //         }

  //     }

  //     function startActiveTimer() {

  //         isActive = true;

  //         clearInterval(timer);

  //         timer = setInterval(function() {

  //             activeTime++;

  //             sessionActiveTime++;

  //             localStorage.setItem(localStorageKey, activeTime.toString());

  //             sessionStorage.setItem(sessionTimeKey, sessionActiveTime.toString());

  //             if (activeTime % sendInterval === 0) {

  //                 sendActiveTimeToMetrika(activeTime, 'user'); // Изменено на 'user'

  //             }

  //             if (sessionActiveTime % sendInterval === 0) {

  //                 sendActiveTimeToMetrika(sessionActiveTime, 'visit');

  //             }

  //         }, 1000);

  //         console.log('Таймер активности запущен.');

  //     }

  //     function init() {

  //         // Инициализация активного времени из localStorage и sessionStorage

  //         var storedTime = parseInt(localStorage.getItem(localStorageKey), 10);

  //         var storedSessionTime = parseInt(sessionStorage.getItem(sessionTimeKey), 10);

  //         activeTime = isNaN(storedTime) ? 0 : storedTime;

  //         sessionActiveTime = isNaN(storedSessionTime) ? 0 : storedSessionTime;

  //         // Слушатели событий для отслеживания активности пользователя

  //         ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'touchmove',

  //          'keydown', 'keypress', 'keyup', 'scroll', 'change', 'select', 'submit',

  //          'focusin', 'focusout'].forEach(function(event) {

  //             document.addEventListener(event, function() {

  //                 if (!isActive) {

  //                     startActiveTimer();

  //                 }

  //                 resetInactivityTimer();

  //             }, false);

  //         });

  //         // Запуск таймера активности

  //         startActiveTimer();

  //         console.log('Скрипт отслеживания активного времени инициализирован.');

  //     }

  //     // Инициализация скрипта после полной загрузки DOM.

  //     if (document.readyState === 'loading') {

  //         document.addEventListener('DOMContentLoaded', init);

  //     } else {

  //         init(); // DOM уже загружен

  //     }

  // })();

  return (
    <>
      <main>
        <circle
          dangerouslySetInnerHTML={{ __html: '<!--silly easter egg)))-->' }}
        ></circle>
        <MainBlock />
        <TextLen />
        <ServicesWidget />
        <PlanWidget />
        <ProjectWidget />
        <TechsWidget />
        <ApplicationWidget />
      </main>
    </>
  )
}
