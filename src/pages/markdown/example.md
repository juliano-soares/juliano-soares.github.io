# Machine Learning

## Sumário

- [1 - Introdução a Machine Learning](../Topicos/IntroducaoAInteligenciaArtificial/README.md)
  - [sd](sd)
- [2 - Machine Learning](../Topicos/MachineLearning/)
- [3 - Algoritmos de Busca e Otimização](./Topicos/AlgoritmosDeBuscaEOtimizacao/README.md)
- [4 - Sistemas Especialistas](./Topicos/SistemasEspecialistas//README.md)
- [5 - Lógica Difusa](./Topicos/LogicaDifusa/README.md)
- [6 - Algoritmos Genéticos](./Topicos/AlgoritmosGeneticos//README.md)
- [7 - Redes Neurais e Deep Learning](./Topicos/RedesNeuraisEDeepLearning/README.md)

<Code language="python" >

def Chebyshev(start, objective):
    distance = math.abs(start - objective)
    return distance

def Chebyshev2D(start, objective):
    distance = math.max(math.abs([start.x - objective.x]),
                        math.abs([start.y - objective.y]))
    return distance

def Chebyshev3D(start, objective):
    distance = math.max(math.abs([start.x - objective.x]),
                        math.abs([start.y - objective.y]),
                        math.abs([start.z - objective.z]))
    return distance
</Code>
