import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProductDetailComponent.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
function ProductDetailComponent() {
    return (
        <div className="detail-container">
            <div className="detail-top-section">
                <div className="detail-top-left">
                    <img className="detail-top-img" src="img/de1.png" />
                </div>
                <div className="detail-top-right">
                    <p className="detail-top-product-name">우먼스 수플레 크롭 스윗 세트</p>
                    <p className="detail-top-fixed-price">164,000원</p>
                    <div className="detail-top-price">
                        <p className="detail-top-discount-price">147,000원</p>
                        <p className="detail-top-discount">10%</p>
                    </div>
                    <hr />
                    <div className="detail-option-section">
                        <div className="detail-option-section1">
                            <span className="detail-option-gray">색상</span>
                            <select className="select1">
                                <option>-[필수] 옵션을 선택해 주세요-</option>
                                <option>페일블루</option>
                            </select>
                        </div>
                        <div className="detail-option-section2">
                            <span className="detail-option-gray">사이즈</span>
                            <select className="select">
                                <option>-[필수] 옵션을 선택해 주세요-</option>
                                <option>스웻셔츠S</option>
                                <option>스웻셔츠M</option>
                            </select>
                        </div>
                        <div className="detail-top-total-price">
                            <p>0원(0개)</p>
                        </div>
                        <div className="detail-top-cart-purchase">
                            <p className="detail-top-cart-button">장바구니 담기</p>
                            <p className="detail-top-purchase-button">바로구매</p>
                        </div>
                        <div className="detail-top-delivery-shopping-all">
                            <div className="detail-top-delivery-shopping">
                                <p className="detail-top-delivery-information">배송비/배송안내</p>
                                <p className="detail-top-shopping-tip">쇼핑팁</p>
                            </div>
                            <p>무료배송</p>
                            <p>15시 이전 결제완료 시 당일 출고</p>
                            <p>(예약상품과 일반상품 함께 구매 시 일반상품은 선출고 됩니다.)</p>
                            <p>회원가입시 쿠폰팩 20만원 증정</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="height"></div>
            <div className="detail-middle-section">
                <div className="detail-middle-details">
                    <p className="detail-middle-product-detail">상품상세</p>
                    <p className="detail-middle-size">사이즈 찾기</p>
                </div>
                <div className="detail-middle-product-imgs">
                    <img className="detail-img" src="img/de1.png" />
                    <img className="detail-img" src="img/de1.png" />
                    <img className="detail-img" src="img/de1.png" />
                    <img className="detail-img" src="img/de1.png" />
                </div>
            </div>
            <div className="detail-bottom-service"></div>
            <div className="detail-bottom-service"></div>
            <div className="accordion-container">
                <Accordion className="accordion-section" allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion-title">사이즈 안내</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>(cm)</th>
                                        <th>총장</th>
                                        <th>소매길이</th>
                                        <th>가슴단면</th>
                                        <th>밑단단면</th>
                                    </tr>
                                    <tr>
                                        <td>XS</td>
                                        <td>66</td>
                                        <td>83.5</td>
                                        <td>65.5</td>
                                        <td>60.5</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td>68</td>
                                        <td>86.5</td>
                                        <td>68</td>
                                        <td>63</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>70</td>
                                        <td>89.5</td>
                                        <td>70.5</td>
                                        <td>65.5</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>72</td>
                                        <td>92.5</td>
                                        <td>73</td>
                                        <td>68</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>제품색상은 사용자의 모니터의 해상도에 따라 실제 색상과 다소 차이가 있을 수 있습니다.</p>
                            <p>제품컷의 색상이 실제 제품 색상과 가장 비슷합니다.</p>
                            <p>상세 사이즈는 제품의 특성 또는 측정 위치에 따라 약간의 오차가 있을 수 있습니다.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion-title">상품 정보 제공 고시</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <ul class="dePrdInfo">
                                <li>
                                    <span>품명 및 모델명</span>아웃포켓 베이직 윈드브레이커
                                </li>
                                <li>
                                    <span>소재</span>겉감: 나일론 100% / 주머니감: 나일론 100%
                                </li>
                                <li>
                                    <span>색상</span>블랙 그레이 그레이시퍼플
                                </li>
                                <li>
                                    <span>치수</span>XS, S, M, L(상세 사이즈는 사이즈 가이드 참고)
                                </li>
                                <li>
                                    <span>제조년월</span>2023년 11월(지속적인 생산으로 인해 고객분들께 발송되는 상품별로
                                    제조일자가 상이할 수 있습니다.)
                                </li>
                                <li>
                                    <span>제조국</span>베트남(제조국은 1차 생산지 기준이며, 리오더가 이루어질 경우 다른
                                    국가에서 생산될 수 있습니다.)
                                </li>
                                <li>
                                    <span>제조자/수입자</span>(주)에이피알
                                </li>
                                <li>
                                    <span>취급시 주의사항</span>짙은 색상은 이염의 우려가 있으니 단독 세탁하여 주십시오.
                                    세탁시 미지근한 물에서 중성세제를 사용하시고 물에 10분 이상 담가두지 마십시오
                                </li>
                                <li>
                                    <span>품질보증기준</span>관련법 및 소비자분쟁해결 기준에 따름
                                </li>
                                <li>
                                    <span>AS책임자와 전화번호</span>1544-2083 (주)에이피알 고객센터
                                </li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion-title">
                                세탁방법 및 취급시 주의사항
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>뒤집어 찬물에 단독 손세탁 하십시오.</p>
                            <p>표백하지 마십시오.</p>
                            <p>옷걸이에 걸어서 그늘에서 건조시켜주십시오.</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion-title">상품 결제 정보</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                고액결제의 경우 안전을 위해 카드사에서 확인 전화를 드릴 수도 있습니다. 확인 과정에서
                                도난 카드의 사용이나 타인 명의의 주문 등 정상적인 주문이 아니라고 판단될 경우 임의로
                                주문을 보류 또는 취소할 수 있습니다. 가상계좌 주문의 경우, 3일 이내로 입금이 진행되어야
                                하며 입금되지 않은 주문은 자동취소 됩니다.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion-title">배송 안내</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>- 배송방법 : 택배</p>
                            <p>- 배송 지역 : 전국지역</p>
                            <p>- 배송 비용 : 3,000원</p>
                            <p>- 배송 기간 : 3일 ~ 7일</p>
                            <p>
                                - 배송 안내 :제주도 및 도서산간 지역으로의 배송인 경우 [4,000원의 배송비가 추가됩니다.]
                            </p>
                            <p>- 배송기간</p>
                            <p>평일기준 오후 3시까지 결제완료 건에 한해 당일 출고됩니다.</p>
                            <p>당일 오후 3시 이후 주문건은 평일 기준 익일 출고 됩니다.</p>
                            <p>
                                (단, 주문량 폭주로 출고 지연이 영업일 기준 +1~2일 발생될 수 있는 점 양해 부탁드립니다.)
                            </p>
                            <p>
                                (직영 매장을 통해 주문이 분리되어 출고될 수 있으며, 이 경우 상품을 따로 받아볼 수
                                있습니다.)
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className="accordion-title">교환/반품 안내</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>교환 및 반품이 가능한 경우:</p>
                            <p>
                                - 상품을 인도 받은 날로부터 15일 이내에 한해 계약에 관한 청약 철회가 가능합니다.
                                공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나 다르게 이행된 경우에는
                                공급받은 날로부터 3개월 이내 혹은 그 사실을 알 수 있었던 날부터 30일 이내 교환/반품이
                                가능합니다.
                            </p>
                            <p>교환 및 반품이 불가능한 경우:</p>
                            <p>- 고객님의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우.</p>
                            <p>
                                - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우(예: 제품을 일부
                                사용한 경우/제품의 구성품 또는 상자 등이 훼손되어 상품가치가 상실된 경우/본품을 개봉하여
                                제품의 가치가 훼손된 경우)
                            </p>
                            <p>- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우</p>
                            <p>- 복제가 가능한 상품 등의 포장을 훼손한 경우</p>
                            <p>- 소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에 들어간 경우</p>
                            <p>
                                ※ 단순변심으로 인한 교환, 반품은 왕복 택배비가 부과됩니다. (색상 및 사이즈 교환 등 포함)
                            </p>
                            <p>
                                - 교환/반품/환불에 대한 자세한 문의는 고객센터(☎1544-2083)를 이용하시거나 Q&A 게시판을
                                이용하시기 바랍니다.
                            </p>
                            <p>- 고객센터 운영 시간 : 09:00 ~ 18:00 (주말, 공휴일 휴무 / 12:00~13:30 점심시간)</p>
                            <p>
                                - 본 상품의 품질보증 및 피해보상에 관한 사항은 관련 법률 및 공정거래위원회 고시
                                『소비자분쟁해결기준』에 따릅니다.
                            </p>
                            <p>
                                - 단, 소비자분쟁해결기준에 구체적인 정함이 없는 경우에는 관계법령 또는 상관례, 회사의
                                개별약관(공지)에 따릅니다.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default ProductDetailComponent;
