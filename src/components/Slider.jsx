import React from 'react'
import Carousel from 'framer-motion-carousel'

import Styled from "styled-components"

const colors = ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMTEBYRExMWFhYWFhYWFhYZFhYWFhYWFhYYGBYWFhYaHysiGhwoHxYWIzQjKCwuMTExGSE3PDcwOyswMS4BCwsLDw4PGxERHDAoISQyMC4wMDAwMDAuMDAwMDAzMDIwMDAwMDAwMDAwMDAwLjAwMDAwMDAwMDAwMC4wMDAwMP/AABEIAIYBdwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAgEDBAUGBwj/xABAEAACAQIDAwkFBQYGAwAAAAAAAQIDEQQSIQUGMRMiQVFSYXGBkRUyobHRB0JTkvAUI2JyssEkM3Oi0vFDgsL/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQMCBAUGB//EADARAAIBAgMFBwQCAwAAAAAAAAABAgMRBCExEkFRYXEFEyKBkbHwocHR4ULxFCMy/9oADAMBAAIRAxEAPwDbSpmmlAWnA004FRYNCBfCBFOJdCIBMYl0IkQiXRQBEYnmPtP2lyODyJ86rJx78mV5/W6Xn3Hq0j559rmAlUlSrwzTUIyjOK92Gt1Lzu15IySFz5tGVnmf6bPXfZ9CMqk1e01C68ePDpVvkeNq1LteSXyN+y604VqdSEmne111PivgJrw2LaUrSTPqOx8JGcnOrVhCbuqkHGpFStwejeZehur0rxlVm48nBWi8rhzUtW7yend3GLY+89PL++pXmulJWfeupnlN+d6auJfIRXJ0b6rpn3SfVqnYpSvkbk57Kv8Ag89Sr8pXlUXCblL80pNfBn3fdSFsFQ/04n55pTdOavey0fefoDdXaVN4OhztVSgnzWle2vFFzXA57Z20hkhKdVSV4u46MTElImxAAkLBYAJAEgCYAAFwuAABcAAALkXAJAgLgAABcALENEgAVtCNFwriAUtCtF7gK4gFDQriXuIrQBncRXE0NCSQBllApnA1yRVKIBjnAoqQNs4lNSIBgqQAvnEkAz0omiERKcTRTiQBooughYRLoxAJii2KCMSyMSQc7FYrnOHQtPF9JkxMYzTUtVb1T7/URTvNy0bcm7PxZj2hlcGnrGztfhZ8YyT6pf1dxeskVnzzeLY9GNWUqTVuvofXl6138NT0GF3ew89mYfEUorlI25SV3ed7xlfXola3VY5UNnyxeI/Z6TUqs289RtuMYri9NUuC8Wj2+7mwf2fBvD8rGsszekXC13fmpu9r630NWpNX1N6hHijhUcFx60v0w+0WcKODw+HirPNyj63ZON/PM35HpobtzqR5VSUYRkm73z81rMvDz6xdv7sYes415qU5U1l1by5L31XTxZXDiW1Jxd4p6anzXYW6tbFTjNrLSk7XfvSSerivDpZ9SweGVOEYR4JWS8P+rkYGilFySslG0V0JW6P11FnKc/Ty7v19Ddpp2zOfVkm/DodGhUcWmjspnCp8PM7dPgvBEVVoYQY4ALcpLBgFuRckDgJcLkAe5FxcwOQA2YMxW5BmALGySrMGYAtzEXK8wZiQOFxUAA1wuKTcAkLkAASQwIYBDK5IeRDAKmJIsYjAK5FUi2QkkAUSRTNGmSKpIAyVIgWTiSAU04miERYItggB4ItihYItigCYotpiJFkEQDzNB2vfTW1yrauz+WpyirqTVrJ8Xayf68PDdsrCuc5Sl7ibv3vsnSWEjmc+EUm2lpbTRrqKK/aFGlU7qWtr/rrv9yYUZSW0jg7v7JpUObSSilFucmm+VlpFNvjlTlKy4dPSbKlK6cmtW+MJKL4aPW1+PeTh9lcnR/w0k3dc2bfuq+ia6dVrw06Di7SxlWdRYb9njFuKzTlHSLlHM7Wtom7XTtdFEa9KpJ7Euf01Nym9mPi1PSbDxyyU4O9qlKrLnNOX+ZTWqXHS+vcPhdn5nLlbu1mtdHfqto0ee2FVUK2z7u1qNam1p99S061zor0Oqtu5K06MedyfG71cZf3+qOhhKXevZ36nN7QxawrdRvJ5PlmdJ4ClZxUsid+9a9Tb+ZzadGMZytPPro0rdHSZ8Zi3UbfBdX92Jha1nfzfidh4N7De/geZXbsVXUbeC9m/uuXXdwOnCWv69DuQWi8DgUVzku879zl1dx6eAARchspLCbhmFuRcAlsjMAABci5KJSAIAmxNgBQGsGUAiwWJaAACbkEkgCRQAJuNcREoAZigAACtEshgCtCtEtkMAraEkh2IwCtxKpxLpFUgCicQGmABXFF0CmJdFgFsS2JVEtTAHQ8RYjpGljcWsPDL/p6fn5qW06e0+RXGkopRSskZdoVctJ/xO3kuP9zVVlZfI4u38TlXgjykm5NvVv7nQitxr2LWzKcn7qagrdLSzS/qRzMZlde6zcXdP+G2l10PT1N27sHDDRvZ571Gn1y1XwsYsfi1yklwlGnJLoSfV48dToUaDqSUacb7MXfLg7t+bdklyRz54mnSqyc3rdLq1ay9L+pxdoYSccTBqS/cU1OPRnfLTnJa8Ob46yj0O5zHtLJtCrmfCajL+Vxj8mk/I6+8GCdPaVGeVqEotZJSTUpxu1zot8yzbeifHTVHhdoTcNpV05qSlPNGS4Si7OP0fgz1OAk1VWmS3Z7+PrwOf2pBV6MsuvXf7n0pIMph2Fi+Uop3u48x+XB+lvibz1Kd1c+cTi4ScXuOhsqpeaT6GrfU9Bc8jTm4tSTs07o9RhMSqkFNea6utHG7Qo7MlNaP3/Z7HsDHd7TdCb8UdOcf17FtyCbE2OcehFsTlGyk2AEURlEaxIAtibEkgEEWGJAEsGUcABWiMo4WAK8pOUcABLEWLCLACED5SGgBQJIYBFiGhiJAFbBoZoVoArkVsuaEaAKWiuSLpIrkgCiaAaaAAy02XRZmpyL4MgGiLLYsoizVhodLKq9aNGm5y/vl86mUYuTsiyMRmSV1J20PKVq0qs3Oer+WN+MVFWQleXwPH7w13OagnrKSivN2R6LaWItF9fDzZ53AUOVxtNdEM1R/+qtH/c4mFJXnnuLU1GLkz1kKKUci0SSS7kl9EeU3jpRjSrzzK7g1dX++1G1ujXQ7u2MVOCai8tuD6b9BwVgHiZwoTll5WpGLypc2KzT0XC94tneeIcsVKVJ2jOy6xVvT3z6o83SoqUYqcb7Du3wbf7PM7Q2LtB4WjVoy5SnXk4RSlJzpNOUXxsoReV6ptcODsc3eDd3kKOGrxk3yjlSq3tZTXOjl04Zb8eyfbMXsuFHDQo008tK2W+rdmm2+96t+J87+0aLdSdCN1CMYzjHW3Ke+5W63rHwOvBOM4yTyept1puqpR4GPdqvkml0TST/mXD6eZ6ZM8Rs+reCt0ao9fgMRylNS6WtfFcT0lF5WPn+PpeLb8jSdDY2MyTyv3ZaPu6jnxYMzq01Ui4y0ZqYfETw9WNWGq+W8z2CGMGxcbykMr96Oj710M3XPNVKbpycZao+kYevDEUo1YaP415DE3FAwLhrhcUkAYLiXJAHuFxLhcAsuRcTMDYA9wuJcjMAWXC4lybgDXC4tyLgDXFC4XAACGwuAAMi4XABiMZshgCSEkOxJAFciqRcyqQBTIAmABhpl0Cimy+JALom+hUuuHA50C6nOzujXxOFhiIpT3aW+WM4TcdDeYsVD96n3X9P0jZRmpcPe7N+P8rfyZXiKTazL7t0195Xs9V5HDxHZdWnnHxLlr6b/ACv0NqFeL1yPO7dq2slxSu/Mjcajndas2lrGmr3vpzpcF3w9DFtyrrLvfwR6Dc+ioYOnmWs81S648983x5qia+GinFtluJezStxI3jbjBKyabtda68fI5+7Eb4ukuuc5fkoy/wCaOlvCoWtm42v0LR6PxObsTExo4yknd/uq8n3XnSgvHRP1Onh8O4OFZxtG+uTWRXDG4fuZUU1t2035r0fl9z1G8mPlThlhbM03qrpJcNO9/I8ri9lxxsKdecuTnBqE7K6nFO9rdD10fRd8T122MA6qjUhztOHWnqmvX4nMwuz3To2krOUpO3UuCuXYirWhVlLdbLgaMMmfIp4d4evVodFOpKMe+F7wfnFxfmd7djE2lKm+EtV4rj8PkPv/ALMUK8Ky/wDLFp97p2Tb8pRXkcrBylGcXFNyTVktW3fRW7z0+BxDqU4VLapP8nle0qKc5w+cj2LCKd7LVnSw2x3o6ikr8IaNvu7jtUNmQgtVb+BdP8z4tdy08Teq4uEFlmczC9jYis/F4Vz1+ed+Rx9jYGrnU1zUnZ9/WrdfyO8HwXQlokupLoIZxcRXdaW0z2OBwUMJT2Itu+bvxJJFC5QbgwCphcAZkXFTAAa4XFuSATcgBkALYLEhcACRWCAGuFyCQACwAAFiCWQAAAgAFsQxmIwAkVyHZXIAVlUyyRVJgFUmBEmABz4IvgZ4M0QZALYlkEVRZbGRILYmqGKembXv4O3Vfp8zGmWRYRNrnF3qwNGq3GlUjCtK37uTy583TG+mbw4nadNRUaa4QiorySR4vZGLp4rbLppt8jUqNp9VJtZovg1nt4XPd4um02+g5ONpwjVSirXzfUvw9VXW28knY4O8rzJ2+6o/V/M5+yVfFpP7uGX++rf/AOC3lbyqdTk/jf6F26GHhUxuIUm0oUaCVu+db/ijOhiozwf+M3nGUvRu6f1aORGjfEuuv5JfS917Hs9jzfILubS8LnF3u28sLRcnDlJSnlhFuy4Xbb6l/dHo42glCKVkjw/2t4eXJ0qsVzIuSk+hOajZvq91r0OioKNFQlmb0Kd5xbOJtfbscfhLcnkq0JxllTzKVOf7tuOl1aThdeGvVs3JoUqcuUqJupwhZXUe9d/ec37OMDKeJlVs+ThTlGUujNOyUb9f3vI7rw0aWJnHqldeDtJfM28NW/193Y1cVg4vEKpfdpz6nrFV6tLkXEpO6T60Mka8m28zajFJZBcETYmxBIpNibAAKAwWAFsA1gygCom5NiLABcm4WBRAIbAnKTlAFRJNgsAQSTlJsALYBrEAEWJAGwBWQyWxHIALkNkNitgENiSYSYkmARKRVJjSZXJgCTYCyYAGCDLYM62E3YnOnGfKxWaMZWyvS6v195et1Z/ix/K/qLMi6OPGRdFnVjuzP8SP5X9Rlu3L8RejJsxdHMTJq18kJTeuWLlbryq9vgdRbvS/Ej6P6mfau69Srh6lKFWMZThKCk4tqOZWbsn1NhIXR8/+wvDurWxeLkk3aNOP8026lT5Q9T6Tj68lTm1a6i3bLF6pX4NGDcTct7PwroOpGpKVSVSU1FxTbUYpWbfBRR28Ts6U4OLcXfTVP5ppmvWoyqOc07P+PPrr0KZOV0kup4ajXzc2cIvM0tIqD6uMUvimW7hVlPGY2Ssn/h00uC0qt26tW2egW7ElJNOmlfW0ZuTXVeUnbxQm6u6UsLUxE5VFPl6kZpKLWVRTSTber146eBoQwlZJ3WvTit/qb0pUlTjGO5Ljq9XpyR3MPFNa9AYykurRq3d4GiNK3AJUrqzOtSg401GW41WziRdpZUkle2VKyt4I+f8A2q7WqYerSnQcVGtGpHlPealRnlkop6X5y1d/dPpiwFXlc2ank6sss/5r2+B5XeL7OZ4nCQw6rwjKnialanN03K1OpyjdNrMtbzTv/CWQneSdrWyMdnJ5lf2bYp1NnwcpOUlOom2227yzXbfH3j0Zzty9y6mCoypTrxqZp5k1BxtpZ6NvqR3/AGY+0vQiavJtGUXaKuYbkpmz2Y+0vRh7MfaXozGzMroyNhc2ezH2l6ELAu9s6vxt02d7P4P0IsxdGUDZ7PfaQezn2l6E2YujHYk1fsWts6vxt02d7P4P0G9nPtL0FmLoxE2NcsDbVySB4H+NCzF0ZLAjV+w9GdfrUhYL+OP/AHwFmLozim32e+0vQPZz7S9CLMXRkQGv2c+0vQPZz7S9BZi6MmYi5r9nPtL0D2c+0vQWYujG2Bs9nPtL0F9my7S9GLMXRkbEcjc9mS7S9BXsp9pejJsxdGFyEkzoPZMu2vQV7Hl216CzJujntiOR0nsaXbXoyHsSXbXoxZkXRzHISUjqvYcu2vRivYMu2vRizF0ceUhJzOy93pfiL0ZD3bl+IvR/UWZN0cGUiTtvdqX4kfyv6gLMXR19lf5FL/Th/SjUAGZWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHHlsd5+UVWSk5qS42tFzlklreUW5Xav0WVlwkACqG76i01VndSjd85OXOk+c1JX1qN+S49Nj2Fwaqy0SSvmfYUrvNfncmr6rRvpdwAAfCbIcJ5+WnJ5crctW1dvM3fWazNJ8Er6CQ2I7pyrTaVuanJJ6JWfOeml/GUuN9JAA0Vtm3oqk5ybyxWduTd4WtNaq0r636+NzJW2CnL37K9RpRjlSzyc7tZrN58snpq4R4apwABWt2opNRm4pttWXOjZSWk73XvW8EnpLnFlHdqCnnlOUnmpy6V/lqyXHhol12Wrb1AADuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=", 
"https://image.shutterstock.com/image-vector/online-shopping-concept-perfect-landing-260nw-1654537690.jpg", 
"https://image.shutterstock.com/image-photo/summer-sale-happy-young-woman-260nw-1123345376.jpg",
"data:image/jpeg;base64,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"]

const Wrapper=Styled.div`
max-Width:100%;
height:400px;
max-height:700px;
`

function Slider() {
  
    return (
        <div>
 <Wrapper>   
       <Carousel
       speed={5}
       >
        {colors.map((item, i) => (
            <div key={i}>
<img src={item} style={{width: '100%', height: '395px'}}></img>

            </div>
        ))}
    </Carousel>
     </Wrapper>
        </div>
    )
}

export default Slider