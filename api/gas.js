export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { chain } = req.query;
    if (!chain) {
        return res.status(400).json({ error: 'Chain parameter is required' });
    }

    // Map chains to their environment variables
    // Users will set these in Vercel: MORALIS_URL_POLYGON, MORALIS_URL_FANTOM, etc.
    const envVarName = `RPC_URL_${chain.toUpperCase()}`;
    const rpcUrl = process.env[envVarName];

    if (!rpcUrl) {
        return res.status(404).json({ error: `No RPC URL configured for ${chain}. Please add ${envVarName} to Vercel Environment Variables.` });
    }

    try {
        const response = await fetch(rpcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_gasPrice',
                params: []
            })
        });

        const data = await response.json();
        
        if (data.error) {
            return res.status(500).json({ error: data.error.message });
        }

        // Return the raw gas price hex value
        return res.status(200).json({ 
            chain,
            gasPriceHex: data.result,
            gasPriceWei: parseInt(data.result, 16).toString()
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}