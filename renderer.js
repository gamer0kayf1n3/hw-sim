details = document.getElementById("details")
state = document.getElementById("state")

updater = ()=> {
    const d = details.value
    const s = state.value
    window.electronAPI.change(d,s)
}
details.addEventListener('input', updater);
state.addEventListener('input', updater);