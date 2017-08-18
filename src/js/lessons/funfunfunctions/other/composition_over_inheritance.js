const barker = (state) => {
    return {
        bark: () => console.log('Woof, I am ' + state.name)
    }
}

const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
})

const killer = (state) => ({
    kill: () => state.targetToKill = state.targetToKill + name
});

barker({name: 'karo'}).bark();

const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0,
        targetToKill: null
    }

    return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    )

}

murderRobotDog('sniffles').bark();
