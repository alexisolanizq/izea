/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-theme': '#f6f6f6'
      },
      backgroundImage: {
        'register-image':
          "url('https://cvws.icloud-content.com/B/AY7rsb6CRZ9rfFsKyB0xVxfAzJGLASpfBSpvtrzImKjzS7n1UNdABS9I/register.jpg?o=AiXJsMv-YLIEHEMdaQT_6_mtzDN-IvPugrRoe36S31f5&v=1&x=3&a=CAoguCFA_iVaVbEQv-Gklchyml8Exoo1iFUVQrwX8SQiqN8SbxCmgLnL9DAYpt2UzfQwIgEAUgTAzJGLWgRABS9IaicsjTYPH_F3ARAeHt0T4xmD_duNOOrms5iRexZsCmkGD_3Es3cvAA1yJwxQqp1mAJ2-NGm-UBHlG_ep_R2a5yNml1vweKBxufaA-zZVYm95Rg&e=1680567774&fl=&r=cc25a845-bfb6-4a81-91e9-41ff3db8cf8f-1&k=CBeRazjSSkdNkmdm1sJchg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=54&s=MnX4LT-vatn1JYJDJ8yqb4p73XI&cd=i')",

        'login-image':
          "url('https://cvws.icloud-content.com/B/AUbqKMTInALwqUMEfnO4Hyvr02pMAa31QnfLi4yAqJQlUjgODBcamMCW/auth.jpg?o=Ai3xWQuRF9bVyUQHENlZ6Qgo8lWqKPpbQuXpFaehp39O&v=1&x=3&a=CAog8d633d-p2TXxaYo7A4u9rMnrhOevO7x-Regi8BjIFOoSbxDMt7zL9DAYzJSYzfQwIgEAUgTr02pMWgQamMCWaies2ZW02IfIsjmiWwVgxYZMiKVkduXj1wjOGH68fK4M9KJGQnS86_FyJwAgrq-4vRqs24gVd1OlJMx7GXIdd7ObYGxoyNnJhPe-VzOj0cuT2w&e=1680567831&fl=&r=25424267-57dd-490c-8a6e-032a23c16cec-1&k=cYluA1-7xdprIknL2ntIYA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=54&s=mfFNGWBj3QZTI5jpspXzcIObyNk&cd=i')",

        'hero-gradient': 'linear-gradient(-45deg, #e94287 0%, #e94287 25%, #e94287 51%,  #ffba27 100%)'
      }
    }
  },
  plugins: []
}
