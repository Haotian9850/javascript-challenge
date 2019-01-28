//get all nodes
var timeNodes = document.querySelectorAll('[data-time]');
console.table(timeNodes);   //timeNode is a node list (not an array!)

timeNodes = Array.from(timeNodes);  //convert to array

const seconds = timeNodes.map(node => node.dataset.time)
                            .map(timeCode =>{
                                const [mins, secs] = timeCode.split(':').map(parseFloat);
                                return (mins * 60) + secs;
                            })
                            .reduce((total, seconds) => {
                                return total + seconds;
                            })

                            let secondsLeft = seconds;
                            const hours = Math.floor(secondsLeft / 3600);

                            secondsLeft = secondsLeft % 3600;

                            //same for mins
                            



