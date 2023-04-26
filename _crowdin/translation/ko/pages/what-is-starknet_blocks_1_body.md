## 소개

Starknet은 Validity Rollup Layer 2입니다. 높은 처리량, 낮은 가스 비용을 제공하며 Ethereum Layer 1 수준의 보안을 유지합니다.

스도쿠 퍼즐이 주어지면 솔루션을 확인하는 것이 처음부터 해결하는 것보다 쉽습니다. 우리의 목표가 사람들에게 "이 퍼즐은 해결되었습니다"라는 진술을 확신시키는 것이라면 한 사람이 솔루션을 계산한 다음 다른 사람이 확인하도록 전파함으로써 많은 계산을 절약할 수 있습니다. 이 전략에서 솔루션의 각 계산은 사회에서 복제할 필요가 없는 일회성 이벤트가 됩니다. 비슷한 맥락에서 Starknet은 무거운 L1 계산을 더 가벼운 것으로 대체하여 Ethereum을 확장합니다(따라서 더 저렴합니다!). STARK 증명을 사용한 L1 검증은 오프체인에서 계산됩니다.

## 작동 원리

위의 비유를 염두에 두고 전문 용어를 사용할 때가 무르익었습니다. Starknet은 일반 계산을 지원하고 현재 이더리움을 통해 L2 네트워크로 프로덕션 환경에서 작동하는 무허가 Validity-Rollup("ZK-Rollup"이라고도 함)입니다. Starknet의 최종 L1 보안은 가장 안전하고 확장 가능한 암호화 증명 시스템인 [STARK](https://starkware.co/stark/)사용하여 보장됩니다.

Starknet 계약은 (대부분) 카이로 언어(STARK 증명용으로 설계된 튜링 완전 프로그래밍 언어)로 작성됩니다.