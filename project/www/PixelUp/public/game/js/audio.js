
        var fileUrl = './son/man-is-he-mega-glbml-22045.mp3';

        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var audioContext = null;
        var audioSource = null;
    
        var loopTime = 31;
    
        function play() {
    
            //Create Audio context
            if (!audioContext) {
                audioContext = new AudioContext();
            }
    
    
            //Create Buffer source and connect it to "standard" audio destination ("speaker")
            audioSource = audioContext.createBufferSource();
            audioSource.connect(audioContext.destination);
    
    
            //Load file
            var request = new XMLHttpRequest();
            request.open('GET', fileUrl, true);
            request.responseType = 'arraybuffer';
            request.onload = function () {
                //Decode arrayBuffer as AudioData
                audioContext.decodeAudioData(request.response, function (audioData) {
                    audioSource.buffer = audioData;
                    audioSource.loop = true;
                    audioSource.loopEnd = loopTime;
                    //Play "file"
                    audioSource.start(0);
                }, function () { console.error('The request failed.'); });
            }
            request.send();
        }
    
        function stop() {
            audioSource.stop(0);
        }
    


    

 