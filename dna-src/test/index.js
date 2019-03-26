const path = require('path')
const { Config, Scenario } = require('@holochain/holochain-nodejs')
Scenario.setTape(require('tape'))
const dnaPath = path.join(__dirname, "../dist/dna-src.dna.json")
const dna = Config.dna(dnaPath, 'hylo-messenger')
const agentAlice = Config.agent('alice')
const instanceAlice = Config.instance(agentAlice, dna)
const scenario = new Scenario([instanceAlice], { debugLog: true })

// require('./agent/register')(scenario)
// require('./agent/threads')(scenario)
require('./agent/gql_threads')(scenario)

// require('./agent/messages')(scenario)
