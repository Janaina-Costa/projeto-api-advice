
const advice = document.querySelector('#advice')
const btn = document.querySelector('.change-advice')
const loading = document.querySelector('.loader')
let isLoading = false

const getAdvice = async () => {
  try {
    const response = await fetch('	https://api.adviceslip.com/advice')

    const data = await response.json()

    if (!data) {
      isLoading = true
      if (isLoading) {
        loading.classList.remove('not-loader')
      }
      return
    }
    loading.classList.add('not-loader')
    advice.textContent = data.slip.advice
    return data

  } catch (e) {
    isLoading = true,
      console.log({ Error: e })
    isLoading = false
    loading.classList.add('not-loader')
  }

}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  getAdvice()
}
)

const reloading = () => {
  location.reload
  getAdvice()
}

reloading()