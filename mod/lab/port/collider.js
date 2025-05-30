const Z = 0

function evo(dt) {
    this.__.collide(
        (hitter, target) => {
            if (!hitter.solid.noContact) {
                target.solid.contact( hitter, hitter.solid, (contactTarget, contactSolid, contactPoint) => {
                    if (contactTarget.hit) {
                        contactTarget.hit(hitter)
                    }
                })
            }
            if (env.debugSolids) {
                /*
                log(hitter.name + ' <*contact*> ' + target.name)
                console.dir(hitter)
                console.dir(target)
                //console.dir(contact)
                //log(contact.info)
                */
            }
        },
        e => (e.solid && !e.dead)
    )
}

function init() {
    this.transient = true
}
